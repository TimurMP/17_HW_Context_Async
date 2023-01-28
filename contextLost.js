let group = {
    title: 'Java 2022',
    students: ['Olga', 'Anastasia', 'Sophia'],
    showList: function () {
        const show = function (name, title) {
            console.log(`${title}: ${name}`);
        }
        this.students.forEach(s => show(s, this.title));
    }
}


let group1 = {
    title: 'Java 2022',
    students: ['Olga', 'Anastasia', 'Sophia'],
    showList: function () {
        const show = function (name) {
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show.bind(this));
    }
}

// unmodifiable
group.showList();
const newGroup = group;
group = null;
console.log('=========================');
newGroup.showList();


console.log('============GROUP1=============');

//unmodifiable
group1.showList();
const newGroup1 = group1;
group1 = null;
console.log('=========================');
newGroup1.showList();