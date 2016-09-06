module.exports = [function(){
  const exercises = [
    {name:'ex1', url:'#/ex/1', description: 'exercise 1 description',
    videoUrl: '../../videos/situps.mp4'},
    {name:'ex2', url:'#/ex/2', description: '',
    videoUrl: '../../videos/smiling.mp4'},
    {name:'ex3', url:'#/ex/3', description: '',
    videoUrl: '../../videos/situps.mp4'},
    {name:'ex4', url:'#/ex/4', description: '',
    videoUrl: '../../videos/smiling.mp4'},
  ]
  function getExercise(id){
    id = parseInt(id);
    return exercises[id-1];
  }
  function getAllExercises(){
    return exercises.map(function(e){
      return { name: e.name, url: e.url };
    });
  }
  return {getExercise, getAllExercises};
}];
