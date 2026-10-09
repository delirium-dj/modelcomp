# GPT-5 nano — findings by Mimo v2.6 Flash

- Source: OpenAI/GPT-5 nano (`gpt-5-nano-2025-08-07`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 nano (`gpt-5-nano-2025-08-07`)
- **Short description:** OpenAI's fastest and cheapest GPT-5 variant (released 2025-08-07), aimed at summarization, classification and other high-volume latency/cost-sensitive tasks; OpenAI's docs now recommend GPT-5.6 Luna for most new workloads, and GPT-5.4 nano (2026-03-17) is its named successor — this model is legacy-cheap-tier.
- **Provider / access:** OpenAI first-party API (Chat Completions/Responses; developers.openai.com), Azure OpenAI, OpenRouter (`openai/gpt-5-nano`); Batch API available. No $0 free API tier.
- **Release / knowledge:** 2025-08-07; knowledge cutoff not stated in reviewed sources.
- **IDs:** `gpt-5-nano` / `gpt-5-nano-2025-08-07`; no Zen Free ID found.
- **Context window:** 400,000 input / 128,000 max output (OpenAI model page; confirmed by OpenRouter + Artificial Analysis listings, observed 2026-09-11).
- **Modalities:** text + image in; text out; reasoning yes (effort levels minimal/low/medium/high); tool calls + function calling yes; JSON mode supported per OpenAI API conventions.
- **Pricing (as of 2026-10-02):** **$0.05 in / $0.40 out per 1M** (cached input $0.005); batch $0.025 / $0.20; Azure $0.05–$0.055 / $0.40–$0.44 (OpenAI pricing docs, via AI Atlas/LLM Stats).
- **Architecture:** proprietary; parameters undisclosed (nano-class, non-reasoning-frontier tier of the GPT-5 family).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = "no verified public score found".

Agent / tool use:

- Terminal-Bench (AA, variant=hard, effort=medium): **17.4%** (Artificial Analysis, obs. 2026) — AI Atlas
- BenchLeader agents & tools category: **48/100** best config (rank mid-field); Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Toolathlon: no verified public score found for this model

Reasoning / knowledge:

- GPQA Diamond: **67.6%** (AA, effort=high, obs. 2026-09-11) / **69.4%** (Epoch AI hub, high) / 67.4% (medium); GPQA (full) 71.2% (anotherwrapper)
- Humanity's Last Exam: **8.7–9.5%** (AA)
- AIME 2025: **85.2%**; HMMT 2025: 75.6%; FrontierMath: 9.6% (LLM Stats)
- BenchLeader Index: 55.9 best config (#186/430, measured 2025-11-24, stale)

Coding:

- SWE-bench Verified (bash-only, mini-SWE-agent, effort=medium): **34.8%** (official SWE-bench board, 2025-08-07; rank #37–58 depending on group)
- LiveCodeBench (Vals): **70.2%** (rank #87)
- LMArena Coding: 1384 Elo; LMArena Hard Prompts: 1356 Elo

Long context:

- 400K window; AA-LCR (long-context recall): **43.7–45.0%** (AA, high); Fiction.LiveBench 120k: 21.9% (medium)

Multimodal:

- Image input supported (LLM Stats modality row); BenchLeader multimodal category: 42–46/100; MMMU: no verified public score found

### Normalized scores (1–100)

- **Tool use: 55/100.** Only hard agentic number is Terminal-Bench-hard 17.4% (AA) with a 48/100 BenchLeader agents&tools category — workable for light tool loops but no Tau/GDPval/TB2.1 evidence, capping it in the 50–70 mid band's lower half.
- **Reasoning: 62/100.** GPQA Diamond 67.6–69.4% sits at the upper edge of the mid anchor (60–80%) while HLE 8.7–9.5% stays under 10% and FrontierMath 9.6% — textbook mid band (55–65).
- **Context window: 76/100.** 400K input maps into the 200K–500K band (65–84); measured AA-LCR recall of only ~45% and Fiction.LiveBench 21.9% at 120K cap it below the low-80s despite the generous window and 128K output.
- **Multimodal: 60/100.** Image input is supported (bottom of the +image-in band, 60–70) but BenchLeader's 42–46/100 multimodal category and no MMMU number keep it at the floor.
- **Coding: 60/100.** Mixed evidence — LiveCodeBench 70.2% is respectable, but SWE-bench Verified 34.8% is far below the frontier and the model is explicitly positioned for classification/summarization, not agentic coding; below the 65–75 mid band.
- **Cost efficiency: 97/100.** $0.05/$0.40 per 1M (batch $0.025/$0.20, cache $0.005) is at the methodology's ~$0.10/$0.20 anchor for 97–99; held just below the top because it is paid (no $0 tier) and output is 2× the anchor rate.
- **Overall Score: 63/100.** (55+62+76+60+60)/5 = 62.6 → 63 (half-up) — best-fit: dirt-cheap high-volume classifier/summarizer with a big 400K window; not a reasoning, agentic, or serious coding model.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-02
- Method: public internet research (OpenAI model/pricing docs, Artificial Analysis via AI Atlas, BenchLeader, LLM Stats, evals aggregates, anotherwrapper); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
