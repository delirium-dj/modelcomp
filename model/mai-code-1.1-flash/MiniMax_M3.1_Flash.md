# MAI-Code-1.1-Flash — findings by MiniMax M3.1 Flash

- Source: Microsoft (MAI-Code-1.1-Flash), `microsoft/mai-code-1.1-flash`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft's August 2026 agentic coding model — a 138B/5B-active sparse MoE with 256K context that costs a quarter of MAI-Code-1-Flash, beats Haiku 4.5 and GPT-5.4 mini on SWE-bench Verified (72.6%) and Terminal-Bench 2.1 (62.9%), and now runs 3-bit locally on a laptop.
- **Provider / access:** GitHub Copilot (`mai-code-1.1-flash`, **$0.20/M in, $1.20/M out, $0.02 cached read**), Microsoft Foundry catalog (`MAI-Code-1.1-Flash`), plus experimental local/on-device access via Microsoft's 3-bit quantization (announced 2026-10-07, >120 GB RAM recommended). **Not on OpenCode Zen** — in OpenCode it is reachable only through the GitHub Copilot provider.
- **Release / knowledge:** **2026-08-11** (model card); the Microsoft AI blog update is dated 2026-10-07 (on-device quantization). Pretraining cutoff December 2025; training March–August 2026; English.
- **IDs:** `microsoft/mai-code-1.1-flash` (models.dev canonical), `mai-code-1.1-flash` (Copilot catalog id), `MAI-Code-1.1-Flash` (Foundry).
- **Context window:** **256,000** tokens (128,000 max input, **128,000** max output) — the card's 256K figure confirmed by the Copilot registry.
- **Modalities:** text and image input (the Copilot registry also lists PDF), text output; proprietary, no open weights.
- **Pricing (as of 2026-10-20):** **$0.20/M in, $1.20/M out, $0.02/M cached read** (GitHub Copilot route). The model card's own Pricing field still reads "To be finalized" — conflict noted. Local 3-bit inference is free.
- **Architecture:** transformer with self-attention and **sparse Mixture-of-Experts layers; 138B total, 5B active** — mid-trained from MAI-Thinking-1's compressed 5B-active checkpoint, then ~2M synthetic agentic tasks and >150,000 RL environments.

### Raw benchmarks found

> Microsoft's own model card (Copilot VS Code harness) is the only source with numbers; Artificial Analysis has no page and BenchLM lists only two rows.

Agent / tool use:

- Terminal-Bench 2.1: **62.9%** (model card, Copilot VS Code harness, 17.0K tokens) vs 51.7% for MAI-Code-1-Flash, 49.4% for Haiku 4.5, 60.7% for GPT-5.4 mini
- ScreenShot2WebApp: **42.1%** (card) vs 10.0% (Haiku 4.5) and 39.3% (GPT-5.4 mini) · Vision2Web Level 3: **11.5%** · Text2WebApp: **74.1%** (card) vs 11.5% (Haiku 4.5) and 58.3% (GPT-5.4 mini)
- MCP Atlas / Tau2 / GDPval / OSWorld / AutomationBench / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA / HLE / MMLU-Pro / AIME / FrontierMath / MMLU: no verified public score found for this model — Microsoft's card publishes only SWE-bench and Terminal-Bench plus the vision rows
- Artificial Analysis: **no model page exists** (404)

Coding:

- SWE-bench Verified: **72.6%** (card, 8.6K tokens) vs 71.6% (MAI-Code-1-Flash), 69.8% (Haiku 4.5), 69.2% (GPT-5.4 mini)
- Microsoft also claims 22% better Terminal-Bench 2.1 in Copilot CLI, 15% better .NET tasks, 4% more code surviving commit and tokens streaming 25% faster than MAI-Code-1-Flash
- LiveCodeBench / DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- No MRCR / RULER measurement published; the 3-bit build is documented to retain the full 256K context.

### Normalized scores (1–100)

- **Tool use: 52/100.** Terminal-Bench 2.1 62.9% and the screenshot-to-web-app rows (42.1%) show real agentic competence, but no τ², GDPval, OSWorld or MCP-Atlas number exists and the card's only other agentic metric is Terminal-Bench.
- **Reasoning: 45/100.** No GPQA, HLE, MMLU-Pro or AIME figure was ever published for this model — the dimension is scored as unmeasured with a penalty rather than inferred from its coding results.
- **Context window: 70/100.** 256,000 tokens with 128,000 max output sits in the 200K–500K tier; no retrieval measurement is published, so the tier midpoint applies.
- **Multimodal: 68/100.** Text and image input with text output — the "+image in" band, and the screenshot-to-code results (Text2WebApp 74.1%) are exactly that use case.
- **Coding: 74/100.** SWE-bench Verified 72.6% and Terminal-Bench 2.1 62.9% are strong mid-to-high band coding numbers for a $0.20/$1.20 model, capped by the absence of any LiveCodeBench, DeepSWE or SciCode figure.
- **Cost efficiency: 97/100.** $0.20/M in and $1.20/M out with a $0.02/M cache read, plus free 3-bit local inference on your own hardware.
- **Overall Score: 62/100.** Mean of the five quality dims = (52 + 45 + 70 + 68 + 74) / 5 = 61.8 → **62**. Best fit: cheap agentic coding inside Copilot, or fully local private coding with the 3-bit build — the evidence base is thin, so benchmark it yourself.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Microsoft MAI-Code-1.1-Flash model card PDF, Microsoft AI news and model index, GitHub MAI-Code repo, models.dev, BenchLM, Artificial Analysis absence check, OpenCode Zen catalogue); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MAI_Code_2.md`, using the same headings.
