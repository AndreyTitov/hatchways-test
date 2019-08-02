<template>
    <div class="input-tag-wrapper">
        <input :placeholder="placeholder" 
                type="text" 
                class="input-tag"
                v-model="searchTag">
    </div>
</template>

<script>
export default {
    name: 'SearchTag',
    data() {
        return {
            searchTag: '',
        }
    },
    props: {
        placeholder: String,
    },
    watch: {
        searchTag(val) {
            let studentsData = this.$store.getters.getStudents
            let filter = studentsData.filter(student => {
                if(val.length > 0) {
                    for(const tag of student.tag) {
                        if(tag.toLowerCase().indexOf(val.toLowerCase()) !== -1) {
                            return student
                        } 
                    }
                } else {
                    return student
                }
            });
            this.$store.dispatch('updateStudentsList', filter);
        }
    }
}
</script>

<style lang="scss">
    .input-tag {
        border-bottom: 1px solid lightgrey;
        border-left: none;
        border-top: none;
        border-right: none;
        width: 100%;
        margin: 20px 0;
        padding: 5px 0;
        font-size: 16px;
        
        &-wrapper {
            transition: all .5s ease;
        }

        @media only screen and (min-width: 768px) {
            font-size: 24px;
        }

    }
</style>