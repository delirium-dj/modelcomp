# Claude Haiku 5.5 — findings by GLM 5.3

- Source: Anthropic (`claude-haiku-5-5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's small fast tier refreshed for late 2026 (released 2026-10-07) — a 1M-context reasoning model at $0.10/$0.50 with near-Sonnet knowledge-work agency and extreme thinking budgets; the speed-value pick of the Claude 5.5 family.
- **Provider / access:** Anthropic Messages API; OpenCode Zen `opencode/claude-haiku-5-5` at `https://opencode.ai/zen/v1/messages` — tiered: ≤100K tokens $0.10 in / $0.50 out (cached read $0.01, write $0.125); >100K tokens $0.50/$2.50 (Zen pricing table, live 2026-10-08).
- **Release / knowledge:** 2026-10-07 (Artificial Analysis); knowledge cutoff not stated.
- **IDs:** `opencode/claude-haiku-5-5`; no Free ID.
- **Context window:** 1M (Artificial Analysis, BenchLM).
- **Modalities:** text and image in; text out; reasoning yes (max thinking measured at 341s TTFT); tool calls yes; JSON mode not verified.
- **Pricing (as of 2026-10-08):** $0.10 in / $0.50 out per 1M at ≤100K (Anthropic API, AA; blended $0.08); 244.2 tokens/s; extremely verbose (440M output tokens on the AA Index, ~4x median) — real cost scales with thinking.
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1620** (Anthropic launch post via BenchLM — near the 1750 frontier reference)
- AA-Briefcase Elo: **1578** (Anthropic launch post via BenchLM)
- Harvey LAB-AA: **89.9%** (AA leaderboard via BenchLM)
- HLE w/ tools: **57.4%** (Anthropic launch post via BenchLM)
- Terminal-Bench 4.0: **39.2%** vendor / **32.8%** AA harness (BenchLM)
- AA AutomationBench: **35.4%** (AA leaderboard via BenchLM)
- GDP.pdf: **20.8%** (AA leaderboard via BenchLM)
- τ²-bench / Tau3 / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- HLE w/o tools: **45.9%** vendor / **44.4%** AA harness (BenchLM) — above the 40% frontier reference
- Artificial Analysis Intelligence Index: **43** (AA model page, #2 of 182 in its price class; BenchLM 43.4)
- AA-LCR: **82.7%** (AA leaderboard via BenchLM)
- CritPt: **18.9%** (AA leaderboard via BenchLM)
- AA-Omniscience Index: **+10.7** (AA via BenchLM)
- GPQA Diamond: **no verified public score found**

Coding:

- AA-SciCode: **55.0%** (AA leaderboard via BenchLM) — at the 55% frontier reference
- FrontierCode 1.1 Main: **46.4%** (Anthropic system card via BenchLM)
- SWE-bench / LiveCodeBench: **no verified public score found**

Multimodal:

- Chartography (no tools): **46.4%** (Anthropic launch post via BenchLM)
- MMMU-Pro: **no verified public score found**

Long context:

- 1M window verified (Artificial Analysis); AA-LCR 82.7% is the long-context reasoning proxy; no MRCR/RULER retrieval percentage published.

### Normalized scores (1–100)

- **Tool use: 78/100.** GDPval-AA 1620, AA-Briefcase 1578 and Harvey LAB 89.9% show near-Sonnet knowledge-work agency at a tenth of the price; capped by weak terminal/SaaS execution (Terminal-Bench 4.0 ~33–39%, AutomationBench 35.4%, GDP.pdf 20.8%).
- **Reasoning: 80/100.** HLE 44–46% clears the 40% frontier reference with AA Index 43 and AA-LCR 82.7% strong for the tier; capped by CritPt 18.9%, a low Omniscience score (+10.7) and no verified GPQA number.
- **Context window: 95/100.** 1M verified (Artificial Analysis); not 100 because no ≥98% retrieval-at-512K measurement is published.
- **Multimodal: 65/100.** Image input verified with only a modest grounding score (Chartography 46.4%) and text-only output — mid image-in band.
- **Coding: 68/100.** SciCode 55.0% reaches the frontier reference for scientific code, but FrontierCode 46.4% and the absence of SWE-bench/LiveCodeBench evidence keep it below the big tiers.
- **Cost efficiency: 95/100.** $0.10/$0.50 per 1M (≤100K) is near the top of the value band with 244 t/s serving; the extreme verbosity (440M tokens per AA Index run) and the 5x >100K pricing step are the only brakes.
- **Overall Score: 77/100.** (78 + 80 + 95 + 65 + 68) / 5 = 77.2 → 77. Best-fit recommendation: high-volume knowledge-work agent (analysis, legal-ish review, document workflows) where Sonnet-class output quality matters at Haiku prices; pair with a terminal-strong model for hands-on-keyboard agent work.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08
- Method: public internet research (Anthropic launch post + system card via BenchLM, Artificial Analysis, Zen pricing table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
