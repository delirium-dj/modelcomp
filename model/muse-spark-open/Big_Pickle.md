# Muse Spark Open — findings by Big Pickle

- Source: Meta/Muse Spark Open (`opencode/muse-spark-open`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta Superintelligence Labs' open-weight mixture-of-experts foundation model, released October 2026 for agentic coding, developer workflows and long-horizon repository tasks. It is the downloadable sibling of the hosted Muse Spark line, not an alias of a different family.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-open`; weights on Hugging Face (`meta-models/Muse-Spark-Open-816B-A42B`) for self-hosting. Chat Completions API.
- **Release / knowledge:** October 2026 (open-weight checkpoint); knowledge cutoff not published.
- **IDs:** `opencode/muse-spark-open` (no Free ID on Zen; free weights, paid or self-hosted inference)
- **Context window:** 1,048,576 input / 131,072 output (vendor card; `meta.json` says "1M; up to 131,072 max output")
- **Modalities:** text, code, image, video, audio in; text and JSON out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-11-05):** $0 licence for the BF16/NVFP4 weights; hosted inference billed by OpenCode Zen or by self-hosted compute
- **Architecture:** open-weight MoE, 816B total parameters / ~42B active

### Raw benchmarks found

Agent / tool use:

- JobBench (**agentic work**): **61.8** (BenchLM)
- MCP Atlas (**tool use**): **89.2** (BenchLM)
- Toolathlon-Verified (**tool use**): **72.8** (BenchLM)
- HLE with tools: **61.0%** (BenchLM)
- GDPval-AA (**economic value**): **1401 Elo** (Artificial Analysis)
- Terminal-Bench 2.1 / Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- AA-GPQA: **89.0%** (Artificial Analysis)
- AA-HLE: **43.9%** (Artificial Analysis)
- AA-LCR (**long-context reasoning**): **78.3%** (Artificial Analysis)
- CritPt: **14.9%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **24.9 / 51.24 (#97 of 1014)**
- Omniscience Accuracy / Hallucination Rate: accuracy not published / **28.0% hallucination** (BenchLM)
- AA-MMMU-Pro: **80.9%** (Artificial Analysis)

Coding:

- DeepSWE: **60.0** (BenchLM)
- SWE-Atlas QnA: **58.0** (BenchLM)
- AA-SciCode: **58.4** (Artificial Analysis)
- FrontierCode 2.0: **6.2** (BenchLM)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 78.3% at the model's full 1M window (Artificial Analysis); no separate GraphWalks/RULER curve was published.

### Normalized scores (1-100)

- **Tool use: 82/100.** MCP Atlas 89.2, Toolathlon-Verified 72.8 and JobBench 61.8 are strong for an open-weight model; GDPval-AA 1401 and the missing Terminal-Bench result cap it well below the closed frontier.
- **Reasoning: 78/100.** AA-GPQA 89.0% and AA-LCR 78.3% are solid, but AA-HLE 43.9% and CritPt 14.9% show the model is not a frontier reasoner.
- **Context window: 92/100.** A genuine 1M input window with 78.3% AA-LCR retrieval earns the top tier; the 128K output cap and lack of a published retrieval curve keep it at 92.
- **Multimodal: 90/100.** Text, code, image, video and audio input with AA-MMMU-Pro 80.9%; output is text/JSON only, so no generation.
- **Coding: 75/100.** DeepSWE 60.0 and AA-SciCode 58.4 are respectable, but FrontierCode 2.0 at 6.2% and no SWE-bench Verified number leave a large hard-task gap.
- **Cost efficiency: 95/100.** The weights are free under an open licence and 42B active parameters make self-hosting affordable; only hardware and ops cost remain.
- **Overall Score: 83/100.** Mean of (82+78+92+90+75)/5 = 83.4, rounded to 83. Best fit: teams that need a 1M-context, multimodal, self-hostable agentic model and can trade some frontier quality for data control and zero licence cost.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public internet research (Meta model card, BenchLM, Artificial Analysis, Hugging Face); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Muse-Spark-Open-816B-A42B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
  - [BenchLM — Muse Spark Open](https://benchlm.ai/models/muse-spark-open)
  - [Artificial Analysis — model benchmarks](https://artificialanalysis.ai/models/muse-spark-open)
  - [OpenCode Zen model list](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `Muse_Spark_Open_2.md`, using the same headings.
