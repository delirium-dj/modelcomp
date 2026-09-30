# DeepSeek V4.1 Flash — findings by GPT 6 Sol

- Source: DeepSeek/DeepSeek-V4.1-Flash (`opencode/deepseek-v4.1-flash`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash (paid on OpenCode Zen; no Free-tier ID listed).
- **Short description:** DeepSeek’s open-weight, image-capable reasoning model, suited to coding agents and tool-driven workflows. DeepSeek’s API name is `deepseek-flash`; OpenCode Zen uses a different ID, `deepseek-v4.1-flash`. Older V4 Flash API names temporarily route to V4.1 Flash and should not be mistaken for separate V4.1 benchmarks.
- **Provider / access:** OpenCode Zen `opencode/deepseek-v4.1-flash` via Chat Completions; DeepSeek API `deepseek-flash` via Chat Completions or Responses API; downloadable weights at `deepseek-ai/DeepSeek-V4.1-Flash`.
- **Release / knowledge:** Released 2026-09-10; no knowledge cutoff verified in DeepSeek’s model card or API documentation.
- **IDs:** `opencode/deepseek-v4.1-flash` (Zen, paid); `deepseek/deepseek-flash` (DeepSeek API); `deepseek-ai/DeepSeek-V4.1-Flash` (weights). **No Free ID exists in Zen’s published list for this model.**
- **Context window:** Up to **1M tokens combined input and output**, verified by DeepSeek’s API specifications and model card; API maximum output **384K tokens**. A separate maximum-input figure is not stated.
- **Modalities:** Text and image in; text out. Reasoning is supported and configurable; tool calls and JSON output are supported. Native audio, video, and PDF-file input are not documented for this model—document-image evaluation is not evidence of PDF-file input.
- **Pricing (as of 2026-09-30):** **Paid Zen tier:** **$0.30 input / $1.20 output / $0.006 cached-read per 1M tokens**; Zen lists no cached-write price. DeepSeek’s own API lists those as peak rates and **$0.15 / $0.60 / $0.003** off-peak, respectively. No Zen Free variant is listed, so a Free-tier privacy concession cannot be assumed for this ID.
- **Architecture:** Open-weight, MIT-licensed causal encoder–decoder MoE: **552B backbone parameters** plus **196B Engram memory parameters**, with **8B active during input processing** and **16B during generation**. Hugging Face separately reports **763B parameters** for the repository’s model-size inventory; these figures have different scopes.

### Raw benchmarks found

_Unless marked Artificial Analysis (AA), results below are DeepSeek’s reported maximum-reasoning-effort evaluations; agent scores depend on the stated scaffold._

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek model card, pass@1, DeepSeek Harness Minimal, maximum effort; the card’s scaffold study specifies three samples per task).
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1600 Elo** (independent AA, GDPval-AA v2.1, maximum effort; AA anchors this Elo scale to this model).
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (DeepSeek model card, pass@1, maximum effort).
- HLE: **36.8%** (DeepSeek, full benchmark, pass@1); **39.1%** on its text-only subset. AA independently reports **39%** under its own evaluation. These are distinct measurements, not interchangeable scores.
- LCR / MLCR: **84% AA-LCR v1.1** (independent AA; long-form documents spanning approximately 10K–100K tokens). MLCR: no verified public score found.
- CritPt: **14%** (independent AA; evaluation marked _under review_ on AA’s model page).
- Artificial Analysis Intelligence Index / BenchLM overall: **39 / #25 of 686** (AA Intelligence Index v4.3.2, maximum-reasoning variant; AA’s displayed rank). No BenchLM figure is substituted for AA’s index.
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **52%** (independent AA SciCode; evaluation marked _under review_).
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **74.2%** (DeepSWE v1.1 resolved, DeepSeek model card, mini-SWE scaffold, maximum effort; its scaffold study specifies eight samples per task).

Long context:

- no long-context retrieval reported on MRCR, RULER, or GraphWalks at a specified window length. The independently measured **84% AA-LCR v1.1** concerns approximately **10K–100K-token** documents; it does **not** establish retrieval accuracy at 512K tokens or beyond.

### Normalized scores (1-100)

- **Tool use: 90/100.** Terminal-Bench 2.1 reaches the supplied frontier band; AA reports **1600 GDPval-AA Elo** and **69% AutomationBench-AA**. GDPval remains below the supplied frontier reference, and agent results are scaffold-dependent.
- **Reasoning: 82/100.** **90.9% GPQA** is frontier-band, but **36.8% full HLE**, **39 AA Index**, and **14% CritPt** limit a higher assessment.
- **Context window: 96/100.** The verified **1M-token combined** limit qualifies for the top context tier; no qualifying **≥98% retrieval result at 512K+** was found to justify 100.
- **Multimodal: 65/100.** Text-and-image input with text output fits the image-input tier; native audio, video, non-text output, and PDF-file input are not established.
- **Coding: 91/100.** **74.2% DeepSWE v1.1** and **90.6% Terminal-Bench 2.1** meet the supplied frontier references; **52% AA-SciCode** and missing SWE-bench Verified evidence cap the score.
- **Cost efficiency: 95/100.** Scored independently on the evaluated **paid Zen tier**, at **$0.30/$1.20 per 1M input/output tokens**, not as a Free model.
- **Overall Score: 84.8/100.** Half-up-rounded mean of the five non-cost dimensions: **(90 + 82 + 96 + 65 + 91) / 5 = 84.8**. Best fit: cost-conscious coding and tool-using agents that need image input and a large documented context window.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-09-30
- Method: Fresh public-source research using DeepSeek’s release, API documentation and Hugging Face model card, OpenCode Zen documentation, and independent Artificial Analysis results; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
