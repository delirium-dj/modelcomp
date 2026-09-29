# LongCat 2.0 — findings by DeepSeek 4.1 Flash

- Source: Meituan (`meituan/longcat-2.0`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Provenance note:** re-written 2026-09-29 after a concurrent external process removed this file from the working tree.

## Model card

- **Name:** LongCat 2.0 (LongCat-2.0)

- **Short description:** Meituan's frontier-scale MoE — "a substantial step up from previous LongCat models" (1.6T total vs the prior generation) — aimed at long-horizon coding and agentic workflows. Its distinguishing engineering story is hardware: **both the full training run and the large-scale deployment are built entirely on AI ASIC superpods**.
- **Provider / access:** Open weights on Hugging Face (`meituan-longcat/LongCat-2.0`) and ModelScope, self-hostable via `transformers` with `trust_remote_code=True`. **No OpenCode Zen ID** (the Zen free tier is `longcat-2.5-preview-free`, a different model).
- **Release / knowledge:** The model card publishes **no release date and no knowledge cutoff**. The bundled benchmark chart is labelled `longcat-pro-benchmark-charts-2026-06-29`. **No official release date could be verified.**
- **IDs:** `meituan/longcat-2.0` (corpus id); pipeline tag `text-generation`. **Not** the same model as LongCat 2.5 Preview.
- **Context window:** recorded as 1M in the corpus `meta.json`; the card supports it indirectly — "we train LongCat-2.0 on hundreds of billions of tokens of **1M-context** data" with LongCat Sparse Attention. **No explicit window or max-output figure is published, so 1M is inferred rather than specified.**
- **Modalities:** text in / text out (`pipeline_tag: text-generation`), with thinking-mode support (`enable_thinking=True/False`) and tool-calling via a documented chat template. **No image, audio or video input is documented.**
- **Pricing (as of 2026-09-29):** no published per-token price found — the model ships as open MIT weights, billed by whichever host serves it. **No verified price.**
- **Architecture:** large-scale MoE, **1.6 trillion total parameters, ~48B activated per token**, **MIT licence**, LongCat Sparse Attention, pretrained over **>35 trillion tokens across millions of accelerator-days with no rollbacks or irrecoverable loss spikes** (vendor claim).

### Raw benchmarks found

Agent / tool use:

- Vendor position: LongCat-2.0 is "deeply integrated with mainstream harnesses such as **Claude Code, OpenClaw, and Hermes**," delivering "strong performance across code understanding, repository-level edits, automated task execution, and agentic workflows." **No numeric agentic benchmark exists on the card.**
- The card links one benchmark chart image (`figures/longcat-pro-benchmark-charts-2026-06-29.svg`) — **its values are not machine-readable text, so no benchmark numbers could be extracted.** Terminal-Bench, Tau3, GDPval-AA, OSWorld, AutomationBench, Claw-Eval, Toolathlon, MCP-Atlas and SWE Atlas: **no verified public score found.**
- Reasoning: **no GPQA Diamond, HLE, AIME, LCR, CritPt or AA Intelligence Index value is published — no verified score.** The card's quantitative claims are training-scale claims, not evaluation scores.
- Coding: **no SWE-bench Verified/Pro, DeepSWE, LiveCodeBench, SciCode or Terminal-Bench number is published — no verified score.**
- Long context: trained on **1M-context** data; **no MRCR/RULER/GraphWalks retrieval accuracy published.** Thinking mode is toggleable, with an option to preserve reasoning content and a token-efficiency mode with thinking off.

### Normalized scores (1–100)

> **Provisional across the board.** The card publishes architecture, scale and training claims but **zero benchmark numbers**, and no independent evaluator has posted rows. These scores reflect scale plus harness integration, not measured capability — re-score when published evals appear.

- **Tool use: 72/100.** Claude Code / OpenClaw / Hermes integrations with explicit repo-edit and agentic-workflow claims put it mid-upper band, but no measured agentic row exists.
- **Reasoning: 70/100.** 1.6T/48B pretraining over >35T tokens with thinking mode implies a capable reasoner; with no GPQA/HLE/Index figure this is a scale-based estimate only.
- **Context window: 92/100.** The vendor documents 1M-context training and the corpus records 1M, which would normally be the ≥1M tier (95–100) — held at 92 because the window is never an explicit spec and no retrieval-at-length measurement exists.
- **Multimodal: 15/100.** Text-generation pipeline tag with text in/out only; no image, audio or video input documented — top of the text-only band (10–20).
- **Coding: 72/100.** Positioned entirely on coding and agentic work, but **no coding benchmark of any kind is published** — scored on positioning and scale, explicitly not on measurement.
- **Cost efficiency: 70/100.** MIT open weights with no published per-token price; self-hosting a 1.6T-parameter model is a large real cost and no hosted rate is verified.
- **Overall Score: 64.2/100.** (72 + 70 + 92 + 15 + 72) / 5 = 64.2. Best fit: a watch-list open-weights candidate for long-context, harness-driven coding on non-GPU (ASIC) infrastructure — treat every capability claim as unverified until published evals land.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-29
- Method: public internet research (HF model card `meituan-longcat/LongCat-2.0` in raw markdown — 1.6T/~48B MoE, MIT licence, LongCat Sparse Attention, 1M-context training data, >35T tokens, AI ASIC superpods, Claude Code/OpenClaw/Hermes integrations, tool-call and thinking-mode template, ModelScope mirror; corpus `meta.json` for the recorded 1M window; OpenCode Zen live catalogue 2026-09-29 — no longcat-2.0 entry). Scores are normalized 1–100 interpretations, not official vendor scores. **Evidence caveat:** the vendor benchmark chart is an SVG image and no evaluation numbers are published as text.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.