# Claude Opus 4.8 — findings by Ling 3.1 Flash

- Source: Anthropic (`anthropic/claude-opus-4.8`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's May-2026 flagship (launched 2026-05-28, same price as Opus 4.7) — launch-era leader across coding, agentic, reasoning and knowledge-work benchmarks (GDPval-AA v1 1890 Elo, SWE-bench Pro 69.2%, HLE-with-tools 57.9%); now the fallback target after Fable 5 and Opus 5, but still top-tier.
- **Provider / access:** Anthropic API (`claude-opus-4-8`), Claude Code, Bedrock, Vertex AI; adaptive effort control, Dynamic Workflows parallel subagents, computer-use tools, prompt caching, Batch API; fast mode at 2.5x speed ($10/$50); US-only inference at 1.1x. No Zen Free ID (`noFreeId`).
- **Release / knowledge:** 2026-05-28; knowledge cutoff not stated in the launch materials reviewed.
- **IDs:** `anthropic/claude-opus-4-8`.
- **Context window:** 1M tokens input / 128K output (Anthropic API/Bedrock/Vertex). NOTE: the repo `meta.json` stub says "200K" — stale; 1M is documented by LLM Reference and the system card.
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $5.00/$25.00 per 1M input/output (unchanged from Opus 4.7); fast mode $10/$50; Batch $2.50/$12.50; cache read $0.50/M (5-min) / $6.25 (1-hr) / $10.00.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (Anthropic system card unless noted):

- Terminal-Bench 2.1: **74.6%** (Terminus-2 harness; vs Opus 4.7 66.1%, GPT-5.5 78.2% with Codex CLI, Gemini 3.1 Pro 70.3%); Vals AI run: **71.9%**; Terminal-Bench 3.0: **21.1%** (new, harder version)
- OSWorld-Verified (computer use): **83.4%** (OSWorld 2.0: 20.6% — new version)
- GDPval-AA v1: **1890 Elo** (vs Opus 4.7 1753, GPT-5.5 1769, Gemini 3.1 Pro 1314) — launch-era #1; AA's own v2-era run: **1593** / 46.9%
- MCP Atlas: **82.2%** (vs Opus 4.7 79.1%, GPT-5.5 75.3%, Gemini 3.1 Pro 78.2%)
- BrowseComp: **84.3%** single / **88.5%** multi (vs Opus 4.7 79.8%, GPT-5.5 84.4%, Gemini 3.1 Pro 85.9%)
- DeepSearchQA: **93.1%**; τ²-bench: **94.4%** (AA)
- Toolathlon: **59.9%**; AutomationBench: **15.5%** (leads its comparison set: GPT-5.5 12.9%, Gemini 3.1 Pro 9.6%); AA Agentic Index: **42.6%**
- Finance Agent v2: **53.9%**; Gert Labs: **72.97%**; Databricks internal production codebase (The Register): **$1.94/task at 87% success**
- Claw-Eval / ClawProBench / Agents' Last Exam: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (vs Opus 4.7 94.2%, Gemini 3.1 Pro 94.3%); AA: 92.0%; Vals: 92.4%
- Humanity's Last Exam (with tools): **57.9%** (vs Opus 4.7 54.7%, GPT-5.5 52.2%, Gemini 3.1 Pro 51.4%); (no tools): **49.8%**; AA-HLE: 48.7%
- ARC-AGI-2: **72.1%** (per the Opus 5 comparison; Opus 5 later reached 90.4%)
- AA Intelligence Index: **41.8** (the newer TB4.0/AutomationBench-heavy revision); AA-Omniscience: Index **28.8%**, Accuracy **48.8%**, Hallucination Rate **39.3%**
- MMLU-Pro (Vals): **89.6%**

Coding:

- SWE-bench Verified: **88.6%** (vs Opus 4.7 87.6%, Gemini 3.1 Pro 80.6%); SWE-bench Pro: **69.2%** (vs Opus 4.7 64.3%, GPT-5.5 58.6%, Gemini 3.1 Pro 54.2%)
- SWE Multilingual: **84.4%**; SWE Multimodal: **38.4%**
- LiveCodeBench (Vals): **87.8%**; AA Coding Index: **74.3%**; AA-SciCode: **54.4%**
- CursorBench 3.1: **58.4%** / 3.2: **62.3%**; FrontierCode 1.1 Main: **46.5%**; PostTrainBench v1.1: **32.9%**
- DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- 1M-token window (128K output); GraphWalks Parents 256K: **99.3%** (vs Opus 4.7 93.6%, GPT-5.5 90.1%); no 512K+ retrieval figure published

### Normalized scores (1–100)

- **Tool use: 82/100.** GDPval-AA v1 1890 Elo (launch-era #1), τ²-bench 94.4%, BrowseComp 84.3/88.5%, MCP Atlas 82.2% and OSWorld-Verified 83.4% are top-tier, but Terminal-Bench 2.1 74.6% (under the 88% frontier bar), Toolathlon 59.9% and the AA Agentic Index of 42.6 cap the score; AutomationBench 15.5% leads its comparison set despite the low absolute value.
- **Reasoning: 86/100.** GPQA Diamond 93.6% clears the 90%+ frontier bar and HLE 57.9% with tools (49.8% without) clears the 40%+ bar near the frontier; ARC-AGI-2 72.1% is mid-upper, while the AA Intelligence Index of 41.8 (new agentic-heavy revision) and AA-Omniscience (48.8% accuracy) are caveats.
- **Context window: 95/100.** 1M-token window with GraphWalks Parents 99.3% at 256K — excellent, but the ≥98% retrieval-at-512K+ bar for 100 is not met (no 512K+ figure published).
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); no audio/video/PDF input.
- **Coding: 84/100.** SWE-bench Verified 88.6%, SWE-bench Pro 69.2%, LiveCodeBench 87.8% and the AA Coding Index of 74.3% (clears the 70% reference) are strong, but Terminal-Bench 2.1 74.6% (under the 85% bar), AA-SciCode 54.4% (a hair under the 55% reference) and FrontierCode 46.5% cap the score; DeepSWE unpublished.
- **Cost efficiency: 51/100.** $5/$25 per 1M interpolates to ~51 between the ~60 ($3/$15) and ~30 ($10/$50) references; Batch ($2.50/$12.50, ~65) and the Databricks-measured $1.94/task at 87% success are offsets; fast mode ($10/$50) is the premium tier.
- **Overall Score: 82/100.** (82+86+95+65+84)/5 = 82.4 → 82 — the May-2026 frontier leader (GDPval-AA 1890, HLE-tools 57.9%, SWE-bench Pro 69.2%) still near the top, with mid-tier Terminal-Bench 2.1 (74.6%) and text-only multimodal as the gaps.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Anthropic Opus 4.8 announcement/system card, LLM Reference, BenchLM, Howardism/The Register); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Opus_4_8.md`, using the same headings.
