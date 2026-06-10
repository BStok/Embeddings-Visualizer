export default graphSpecificInfo;

function graphSpecificInfo(graphName) {
  return new VectorGraph(graphName);
}

function VectorGraph(graphName) {
  this.graphName = graphName;
  this.getInDegreeLabel = function getInDegreeLabel(inDegreeValue) {
    return inDegreeValue === 1 ? 'incoming link' : 'incoming links';
  };

  this.getOutDegreeLabel = function getInDegreeLabel(outDegreeValue) {
    return outDegreeValue === 1 ? 'similar term' : 'similar terms';
  };
}
