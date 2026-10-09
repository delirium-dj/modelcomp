# GPT 5.4 Pro — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4 Pro
- **Short description:** The maximum-performance variant of OpenAI's GPT-5.4 generation (Mar 2026) — for people who want the best results on the most complex tasks; BrowseComp state of the art at announcement (89.3%), GPQA Diamond 94.6% (#6), HLE 44.3% (#5). Available in ChatGPT Pro/Enterprise and the API.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.4-pro` (paid, $30/$180); OpenAI API `gpt-5.4-pro` (Responses API); ChatGPT Pro/Enterprise plans. Base model is `gpt-5.4` — Pro is a distinct, slower, pricier variant.
- **Release / knowledge:** Released 2026-03-04/05 with the GPT-5.4 family (OpenAI "Introducing GPT-5.4"; BenchLeader lists Mar 4); knowledge cutoff: not stated for Pro (GPT-5.4 base: Aug 2025 cutoff per AA).
- **IDs:** `opencode/gpt-5.4-pro` (Zen, paid); `gpt-5.4-pro` (OpenAI API)
- **Context window:** 1,050,000 tokens / 128,000 max output (models.dev OpenCode listing, verified 2026-10-09 — supersedes the earlier "272K standard / 1M Codex-experimental" reading); BenchLeader lists 1.1M.
- **Modalities:** Text and image in, text out; reasoning yes; models.dev lists Tool Call **No** for the Pro variant (conflicts with OpenAI's agentic browsing claims and native computer-use capability — the Pro API surface may not expose direct tool calls); structured outputs not listed (models.dev).
- **Pricing (as of 2026-10-09):** Paid — $30 / 1M input, $180 / 1M output (OpenAI; identical on Zen; blended $67.50/M per BenchLeader). Batch/Flex at half rate; priority processing at 2x. Output speed ~6 tok/s (slowest quarter), first token ~7.0s.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed. High cyber capability under the Preparedness Framework (deployed with corresponding protections).

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **89.3%** — state of the art at announcement (OpenAI-reported, GPT-5.4 Pro, Mar 5, 2026)
- GDPval (wins or ties vs professionals): **82.0%** (OpenAI-reported; GPT-5.4 base: 83.0%)
- FinanceAgent v1.1: **61.5%** (OpenAI-reported)
- Investment Banking Modeling Tasks (internal): **83.6%** (OpenAI-reported)
- MultiChallenge: **69.2%** (#5, Scale AI SEAL via BenchLeader); TutorBench: **56.6%** (#2, Scale AI SEAL)
- Terminal-Bench 2.0: no verified public score found for Pro (— in the announcement table)
- Tau2-Bench: no verified public score found for Pro
- MCP Atlas: no verified public score found for Pro
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (#6 of all configurations, Epoch AI Benchmarking Hub via BenchLeader, 2026-10-09 — independently corroborates OpenAI's reported 94.4%)
- HLE: **44.3%** (#5 of 46, Scale AI / CAIS via Epoch AI Benchmarking Hub/BenchLeader — corroborates OpenAI's 42.7% no-tools)
- ARC-AGI-1 (verified): **94.5%** (#35); ARC-AGI-2 (verified): **83.3%** (#34) (ARC Prize leaderboard via BenchLeader)
- SimpleBench: **74.1%** (#10, SimpleBench via Epoch AI Benchmarking Hub)
- CritPt: **30.0%** (#15, Artificial Analysis via BenchLeader)
- Chess Puzzles: **58.6%** (#6, Epoch AI Benchmarking Hub)
- FrontierMath Tier 1–3: **82.5%** (#13, Epoch v2 via BenchLeader — updates the announcement's 50.0%); Tier 4: **58.5%** (#21 — updates the announcement's 38.0%)
- MathArena Apex: **69.8%** (#3, MathArena via BenchLeader)
- SimpleQA Verified: **46.3%** (#35, Epoch); MultiNRC: **62.3%** (#4, Scale AI SEAL); Frontier Science Research: **36.7%** (OpenAI-reported)
- Epoch Capabilities Index: **158.9** (#13, Epoch AI Benchmarking Hub)
- BenchLeader Index: **63.6 ±3.3** (#60 of 760, best config; Reasoning 73, Knowledge 74, Multimodal 70 — BenchLeader's own normalization)
- FORTRESS (safety/honesty): **14.8%** (#54, Scale AI SEAL)
- LCR / MLCR: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found (AA page for 5.4 Pro now exists; Index row not published)

Coding:

- WeirdML: **57.4%** (#53, no-reasoning config, Epoch AI Benchmarking Hub via BenchLeader — the only coding-adjacent measured number found)
- SWE-Bench Pro (Public): no verified public score found for Pro (— in the announcement table; GPT-5.4 base: 57.7%)
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- no long-context retrieval reported for Pro (GPT-5.4 base reports Graphwalks/MRCR v2 numbers; not applied here)

Computer use and vision:

- VISTA (visual language understanding): **53.9%** (#2 of 57, Scale AI SEAL via BenchLeader — the first Pro-specific vision measurement found)
- OSWorld-Verified: no verified public score found for Pro (GPT-5.4 base: 75.0% SOTA)
- MMMU Pro: no verified public score found for Pro

## Normalized scores (1–100)

- **Tool use: 80/100.** BrowseComp 89.3% (SOTA at announcement), GDPval 82.0%, FinanceAgent 61.5%, MultiChallenge 69.2% (#5) and TutorBench 56.6% (#2) evidence strong agentic work — but models.dev lists Tool Call **No** for the Pro variant, a direct conflict with the agentic claims that caps the score; missing Terminal-Bench/Tau2 numbers for Pro.
- **Reasoning: 93/100.** GPQA Diamond 94.6% (#6, independently corroborated), HLE 44.3% (#5), ARC-AGI-2 83.3% verified (#34), FrontierMath T1–3 82.5% (#13) and MathArena Apex 69.8% (#3) — clear frontier-band placement (GPQA 90%+, HLE 40%+ → 90–100).
- **Context window: 95/100.** 1,050,000 tokens verified via models.dev (≥1M tier = 95–100; supersedes the earlier 272K reading); BenchLeader lists 1.1M; no Pro long-context retrieval measurement caps it below 100.
- **Multimodal: 72/100.** Text + image in, text out, with measured VISTA 53.9% (#2 of 57) — above the +image-in 60–70 band top on measured vision evidence, below omni-input models.
- **Coding: 68/100.** WeirdML 57.4% (#53) is the only coding-adjacent measured number and it is mid-pack; SWE-Bench Pro and Terminal-Bench 2.0 are "—" for Pro in the announcement table; the family base posts SWE-Bench Pro 57.7% / TB 2.0 75.1%, so a high score would be unverified.
- **Cost efficiency: 12/100.** $30/$180 per 1M tokens (blended $67.50/M) — far beyond the $10/$50 = ~30 methodology reference; the most expensive price point in its family, viable only when maximum quality justifies it.
- **Overall Score: 82/100.** Mean of the five quality dims (80 + 93 + 95 + 72 + 68) / 5 = 81.6 → 82. Best fit: maximum-quality knowledge work, deep research, and hard reasoning where budget is secondary — overkill for routine coding or cost-sensitive workloads.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (BenchLeader model page data as of 2026-10-09, models.dev OpenCode listing, official OpenAI GPT-5.4 announcement, OpenCode Zen docs cross-checked); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: corrects context 272K→1.05M (models.dev), adds measured GPQA 94.6% #6, HLE 44.3% #5, ARC rows with ranks, FrontierMath Epoch v2 82.5%/58.5%, MathArena Apex, VISTA 53.9% #2, WeirdML — Context 70→95, Multimodal 68→72, Tool 88→80, Overall 77→82.
- Future sources: add a new file next to this one, e.g. `GPT_5.5.md`, using the same headings.
