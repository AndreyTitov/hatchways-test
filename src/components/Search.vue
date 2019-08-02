<template>
    <div>
        <input type="text"
            class="search-input"
            :placeholder="placeholder"
            v-model="search">
    </div>
</template>

<script>

export default {
    name: 'Search',
    data() {
        return {
            search: '',
        }
    },
    props: {
        placeholder: String,
    },
    watch: {
        search(val) {
            const studentsList = this.$store.getters.getStudents;
            const filtered = studentsList.filter(student => {
                const fullName = student.firstName.toLowerCase() + student.lastName.toLowerCase();
                return fullName.toLowerCase().indexOf(val.toLowerCase()) !== -1
            });
            this.$store.dispatch('updateStudentsList', filtered);
        }
    },
}
</script>

<style lang="scss">
    .search-input {
        border-bottom: 1px solid lightgrey;
        border-left: none;
        border-top: none;
        border-right: none;
        width: 100%;
        margin: 20px 0;
        padding: 5px 0;
        font-size: 16px;

        @media only screen and (min-width: 768px) {
            font-size: 24px;
        }
    }
</style>
