import {
  TaskProcessor,
  // buildModuleUrl,
  // FeatureDetection,
  // RuntimeError,
  // defined,
  // GeographicTilingScheme,
  // HeightmapEncoding,
  // HeightmapTerrainData,
  // TerrainData,
} from "../../index.js";

//   import absolutize from "../../../../Specs/absolutize.js";

describe("Workers/createVerticesFromHeightMap", function () {
  let taskProcessor;

  afterEach(function () {
    TaskProcessor._workerModulePrefix =
      TaskProcessor._defaultWorkerModulePrefix;

    if (taskProcessor && !taskProcessor.isDestroyed()) {
      taskProcessor = taskProcessor.destroy();
    }
  });
});
