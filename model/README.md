# model/

One folder per tracked model. Each model folder holds one findings file per source.

- Folder name: filesystem-safe slug of the model (usually the Zen ID suffix), e.g. `big-pickle/`.
- File name: `<Source_Name>.md`, e.g. `Muse_Spark_1.3.md` = findings provided by Muse Spark 1.3 Free.
- Each findings file is self-contained: model card, raw benchmarks, normalized 1–100 scores, signature.
- Overview, comparison table and methodology stay in `../model-comparison.md`; cross-model signed log in `../model-findings.md`; website data in `../src/data/models.ts` (update it too when adding a model).

## Folders

- `big-pickle/` — Big Pickle
- `muse-spark-1-3-free/` — Muse Spark 1.3 Free
- `ling-3-0-flash-fin-free/` — Ling 3.0 Flash Fin Free
- `mimo-v2-5-free/` — MiMo V2.5 Free (also covers the `Xiaomi MiMo-V2.5 Free` alias)
- `muse-spark-1-2-free/` — Muse Spark 1.2 Free
- `nemotron-3-ultra-free/` — Nemotron 3 Ultra Free
- `nemotron-3-5-lightning-free/` — Nemotron 3.5 Lightning Free
- `glm-5-1-coding/` — GLM 5.1 Coding (no Zen Free ID; scored on paid pricing)
- `minimax-m2-7/` — MiniMax M2.7 (no Zen Free ID; scored on paid pricing)
- `xiaomi-mimo-v2-5-pro/` — Xiaomi MiMo-V2.5-Pro (no Zen Free ID; scored on paid pricing)
