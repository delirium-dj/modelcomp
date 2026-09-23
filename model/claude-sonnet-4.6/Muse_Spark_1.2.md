# Claude Sonnet 4.6 — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's upgraded Sonnet (2026-02-17) approaching Opus-level coding, computer use and long-context at Sonnet price; 1M beta context.
- **Provider / access:** Anthropic API `anthropic/claude-sonnet-4.6`, Claude.ai, Bedrock/Vertex/Azure, and OpenCode Zen `anthropic/claude-sonnet-4.6` (Chat Completions via adapter)
- **Release / knowledge:** 2026-02-17; knowledge cutoff 2025-10 (benchmark cutoff per card)
- **IDs:** `anthropic/claude-sonnet-4.6` (no Free tier)
- **Context window:** 200K standard / 1,000,000 beta (128K out) — verified via Anthropic announcement and system card
- **Modalities:** Text, image, PDF in; text out; reasoning yes (adaptive thinking, max/high effort, 120K budget for ARC-AGI-2); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-23):** $3.00 / $15.00 per 1M in/out (Sonnet tier; 40% cheaper than Opus $5/$25)
- **Architecture:** Proprietary (Sonnet family)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **59.1%** (Anthropic system card, Terminus-2, thinking off — vs Opus 4.6 65.4%, Sonnet 4.5 51.0%)
- Tau3-Banking / Tau2-Bench: **91.7% Retail / 97.9% Telecom (τ²-bench)** (system card — vs Opus 91.9%/99.3%)
- GDPval-AA: **1606 Elo** (system card — vs Opus 4.6 1633, Opus 4.5 1416; ITPro reports OfficeQA matching Opus 4.6)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **61.3% MCP-Atlas** (system card — vs Sonnet 4.5 43.8%, Opus 4.5 62.3%)
- OSWorld-Verified: **72.5%** (system card — vs Opus 4.6 72.7% within 0.2%, Opus 4.5 66.3%)
- BrowseComp: **74.01% single-agent / 82.07% multi-agent** (system card updated after cheating detection — vs leaks correction)
- Vending-Bench Arena: **27.9% high effort / 26.4% max** (system card — vs Opus 34.9%)

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (system card — vs Opus 91.3%, Gemini 91.9%, GPT-5.2 93.2%)
- HLE: **33.2% no tools / 49.0% with tools** (system card — vs Opus 40.0%/53.0%)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (no AA Index published for Sonnet 4.6 at release)
- ARC-AGI-2: **58.3% verified (60.4% high effort, 86.5% ARC-AGI-1)** (system card — vs Opus 68.8%)
- AIME 2025: **95.6%** (system card — contamination concern noted)
- MMMLU: **89.3%** (system card)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **79.6% Verified (80.2% with prompt mod) / 75.9% Multilingual** (system card — vs Opus 80.8% Verified)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found** (WebArena-Verified state-of-art per card, no public numeric isolation)
- DeepSWE / Coding Index / other: **LAB-Bench convergence 66.6% Opus vs 65.2% Sonnet** (system card)
- CharXiv Reasoning: **72.4% no-tools / 77.4% with crop** (system card — vs Opus 68.7%/77.4%)
- MMMU-Pro: **74.5% no-tools / 75.6% with crop** (system card)

Long context:

- 1M beta; Vending-Bench long-horizon and OfficeQA document reasoning; no MRCR/RULER at 1M published beyond 1M beta claim

### Normalized scores (1–100)

- **Tool use: 84/100.** OSWorld 72.5% near Opus + MCP-Atlas 61.3% (+17.5 vs predecessor) + Tau2 91.7%/97.9% + BrowseComp 74%; capped by Terminal 59.1% trailing Opus and no Claw.
- **Reasoning: 82/100.** GPQA 89.9% + ARC-AGI-2 58.3% + HLE 49% tools + MMMLU 89.3% approaching Opus; capped by HLE 33.2% no-tools vs Opus 40% and no AA Index.
- **Context window: 86/100.** 200K standard / 1M beta; tier 1M qualifies for 85-90 but capped below 92 without MRCR at 1M verification.
- **Multimodal: 72/100.** Text/image/PDF in → text out; MMMU-Pro 74.5%/75.6% + CharXiv 72.4%/77.4% + FigQA 58.8%/77.1%; no audio/video in caps below 80.
- **Coding: 84/100.** SWE-Verified 79.6% near Opus 80.8% + Terminal 59.1% + WebArena-Verified state-of-art; trails Opus slightly, hence below 87.
- **Cost efficiency: 65/100.** $3/$15 paid Sonnet tier (40% cheaper than Opus $5/$25); no $0 Free ID but efficient for near-Opus intelligence.
- **Overall Score: 82/100.** Mean of five non-cost dims (84+82+86+72+84)/5=81.6 → 82; best-fit for efficient computer-use and office-task coding when Opus not required.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Anthropic Sonnet 4.6 announcement 2026-02-17, system card, ITPro coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
