# MAI-Code-1.1-Flash — findings by Claude Opus 5

- Source: Microsoft AI (`MAI-Code-1.1-Flash`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft AI's **vision-capable coding model for GitHub Copilot** — a fast agentic coding tier accepting image and PDF input alongside text. Microsoft publishes a formal model card ([MAI-Code-1.1-Flash Model Card, PDF](https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF)), which is the source of both benchmark figures below. Distinct model; `mai-code-1-flash` (the 1.0 release) and `mai-experimental-test` are separate folders, and Microsoft's MAI-Voice / MAI-Transcribe / MAI-Cyber lines are different families.
- **Provider / access:** **GitHub Copilot**; OpenCode Zen records the route `opencode/mai-code-1.1-flash` in this repo, though Zen's published endpoint table does not list it. Microsoft AI is the vendor.
- **Release / knowledge:** **No explicit release date** surfaced in the sources I consulted — Microsoft's model card is a PDF whose contents reach me only via BenchLM's transcription. Knowledge cutoff: no verified public date found.
- **IDs:** `MAI-Code-1.1-Flash` (Microsoft), `opencode/mai-code-1.1-flash` (this repo's route). **No free tier** — `noFreeId: true` is correct.
- **Context window:** **256,000 tokens** with **128,000 max output** (this repo's curated metadata; 256K corroborated by [BenchLM](https://benchlm.ai/models/mai-code-1-1-flash)). The 128K output ceiling is generous for a Flash-tier coding model.
- **Modalities:** **Text + image + PDF in → text out.** The **native PDF input** is unusual — only Claude Opus 5 and a handful of others in this dataset list file/PDF input distinctly from images, and for a coding model that reads design docs and specs it is a practical differentiator. No audio, no video, no generated media. Reasoning: yes (BenchLM classifies it a reasoning model). Tool calls: implied by its Copilot agentic role and its Terminal-Bench result, but not separately documented in my sources.
- **Pricing (as of 2026-10-08):** **$0.20 / MTok input, $1.20 / MTok output, $0.02 / MTok cached input** via GitHub Copilot (this repo's curated metadata, reported as curated rather than re-verified). The **$0.02 cached rate is among the cheapest in this dataset.**
- **Architecture:** Proprietary, closed weights. Parameter count, activation scheme and training method undisclosed.

### Raw benchmarks found

> **Very thin: three benchmark rows, two distinct figures, both from Microsoft's own model card.** BenchLM assigns **no overall score** ("unranked", 3 of 625 benchmarks), and **Artificial Analysis has no entry at all** — so there is no intelligence index, no CritPt, no AA-LCR and, consequentially, **no hallucination measurement**. The two figures that exist are, however, on the benchmarks that matter most for a coding model.

Agent / tool use:

- **Terminal-Bench 2.1: 62.9%** ([Microsoft AI MAI-Code-1.1-Flash model card](https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF)) — a genuinely strong figure on the hard harness; for scale, GLM-5.1 measures 56.9% and Kimi K2.7 Code 67.0% on the same benchmark via Vals AI
- **τ²/τ³-bench, OSWorld, MCP-Atlas, GDPval-AA, Toolathlon, Claw-Eval, BrowseComp: no verified public score found**

Reasoning / knowledge:

- **Nothing. No GPQA Diamond, no HLE, no MMLU-Pro, no AIME, no CritPt, no AA-LCR, no instruction-following benchmark, no aggregate index, and no hallucination measurement.** Microsoft's model card publishes only the two coding/agentic figures, and no third party has evaluated this model.

Coding:

- **SWE-bench Verified: 72.6%** (Microsoft AI model card) — solid repository-repair capability, in the same band as Claude Haiku 4.5 (73.3% vendor / 66.6% independent) and Nemotron 3 Ultra (71.9% / 69.0%)
- **Terminal-Bench 2.1: 62.9%** (Microsoft AI model card; counted once for agentic and once here)
- **SWE-bench Pro, LiveCodeBench, SciCode, FrontierCode, Aider Polyglot, CursorBench: no verified public score found**, and **no independent reproduction of the 72.6% exists**

Multimodal:

- **No vision or document benchmark of any kind.** Image and PDF input are documented capabilities and entirely unmeasured — no MMMU, no CharXiv, no OmniDocBench, no OCR, no screenshot grounding.

Long context:

- **No MRCR, RULER, LongBench or needle-retrieval number at any depth**, and no AA-LCR entry. The 256K window and 128K output ceiling are unvalidated by public measurement.

### Normalized scores (1–100)

- **Tool use: 62/100.** Scored almost entirely on one number, but it is a good one and on the right benchmark: **Terminal-Bench 2.1 at 62.9%** is credible agentic coding performance, better than several larger models in this dataset. Capped because that is the *entire* agentic record — no τ²-bench, no OSWorld, no MCP, no GDPval — and because the figure is vendor-published with no independent reproduction.
- **Reasoning: 50/100.** Scored at the midpoint on **complete absence of evidence**. Microsoft published no reasoning or knowledge benchmark for this model, and no third party has measured one; Artificial Analysis has no entry, so there is not even an aggregate index or hallucination rate. A model that resolves 72.6% of SWE-bench Verified clearly reasons competently about code, but nothing public calibrates its general reasoning, and I will not infer a number from the coding result.
- **Context window: 70/100.** 256,000 tokens with a **128,000-token output ceiling** is a strong specification for a Flash-tier model — the output limit in particular is double what several competitors allow. Held at 70 because **nothing validates it**: no retrieval curve, no long-context reasoning score, not one measurement at any depth.
- **Multimodal: 52/100.** **Native PDF input alongside images** is a genuinely useful and relatively rare capability for a coding model — reading specs, design documents and screenshots in the same request. But it is **completely unmeasured**, output is text-only, and there is no audio or video. Scored just above the floor-plus-structural-credit line: the capability is documented, its quality is unknown.
- **Coding: 70/100.** The dimension the model exists for, and both available figures land here: **SWE-bench Verified 72.6%** and **Terminal-Bench 2.1 62.9%**, a coherent and useful pairing that puts it in the same band as much larger models. Capped by the complete absence of SWE-bench Pro, LiveCodeBench, SciCode or any independent reproduction — two vendor numbers, however good, cannot support more.
- **Cost efficiency: 86/100.** **$0.20 in / $1.20 out per MTok with $0.02 cached input** for a model resolving 72.6% of SWE-bench Verified is excellent value — roughly a fifth of Claude Haiku 4.5's rate for a comparable SWE-bench figure, with a larger context window and PDF input on top. The $0.02 cached rate makes repeated large-repository prompts nearly free. Docked for no free tier, for distribution being tied to GitHub Copilot rather than an open API, and because the pricing itself reaches me as curated metadata rather than a vendor rate card I could read directly.
- **Overall Score: 60.8/100.** Mean of the five non-cost dims (62 + 50 + 70 + 52 + 70) / 5 = 60.8. Best fit: **cheap, fast agentic coding inside GitHub Copilot** — repository repair, terminal tasks, and specification-driven work where PDF and screenshot input genuinely helps — at a fifth of comparable-quality pricing. The score is held down almost entirely by missing measurement rather than measured weakness: two vendor benchmarks are all that exist, three of five dimensions have nothing at all, and no independent lab has evaluated it. If Microsoft's 72.6% survives outside audit, this would score materially higher.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — BenchLM's aggregated MAI-Code-1.1-Flash page (256K context, reasoning classification, unranked status with 3 of 625 benchmarks, and the two figures it transcribes from Microsoft's model card) and the linked **Microsoft AI MAI-Code-1.1-Flash Model Card PDF** as the primary source for Terminal-Bench 2.1 62.9% and SWE-bench Verified 72.6%. **Artificial Analysis was checked and has no entry**, so the absence of an intelligence index, CritPt, long-context reasoning score and hallucination rate is reported as a scoring limitation rather than proxied from sibling models. The OpenCode Zen endpoint and pricing tables were checked and do not list this model; the $0.20 / $1.20 / $0.02 rates and the 128K output ceiling come from this repo's `meta.json` and are labelled curated rather than independently verified. No release date was published on any source consulted, so none is asserted. Comparisons to Claude Haiku 4.5, GLM-5.1, Kimi K2.7 Code and Nemotron 3 Ultra are drawn from figures gathered independently in this same research pass and are used only for scale, with no data imported from their folders. No benchmark was imported from `mai-code-1-flash`, which is a different release with its own folder. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
