# Claude Sonnet 3.5 — findings by Kimi K3

- Source: Anthropic (`claude-3-5-sonnet-20240620` / upgraded `claude-3-5-sonnet-20241022`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Sonnet (June 2024 + upgraded October 2024 version)
- **Short description:** Anthropic's mid-tier Claude 3.5 model — the 2024 release that made Claude the default developer choice of its era; outperformed the larger Claude 3 Opus at ~2x speed and a fraction of the cost. Legacy entry; succeeded by Claude 3.7 Sonnet (Feb 2025) and far beyond by the Sonnet 4/5 line.
- **Provider / access:** Anthropic API (`claude-3-5-sonnet-20241022` latest; original `claude-3-5-sonnet-20240620`), Claude.ai, Amazon Bedrock, Google Vertex AI (historical listings). Chat Completions-style Messages API. No Free ID (paid only).
- **Release / knowledge:** 2024-06-20 (original); upgraded version 2024-10-22 introducing computer use (public beta). Knowledge cutoff April 2024 (original vendor documentation for the 3.5 generation).
- **IDs:** `anthropic/claude-3.5-sonnet` family; `claude-3-5-sonnet-20241022`. No Zen Free ID.
- **Context window:** 200K tokens; max output 8,192 tokens (vendor docs of the era).
- **Modalities:** Text + image in, text out. No native reasoning/thinking mode. Tool use (function calling) and JSON mode supported; computer use (beta) added October 2024.
- **Pricing (as of 2024-10, historical):** $3.00/M input, $15.00/M output (both versions per chatforest.com and contemporary coverage). Cached-input pricing did not exist at launch for this model.
- **Architecture:** Proprietary, closed weights; parameter count never disclosed.

### Raw benchmarks found

Agent / tool use:

- TAU-bench (tool use, Oct 2024 version): **retail 62.6% / airline 36.0%** (Anthropic Oct 2024 computer-use announcement)
- OSWorld (computer use beta, screenshot-based): **14.9%** (Anthropic, Oct 2024 — category-leading at the time)
- Terminal-Bench / GDPval-AA / Claw-Eval / Toolathon: no verified public score found (benchmarks postdate the model)

Reasoning / knowledge:

- GPQA Diamond: **59.4%** (0-shot CoT; June 2024 version, Anthropic launch card; +9 pts over Claude 3 Opus)
- MMLU: **88.7%** (5-shot; Anthropic June 2024 launch table)
- BullshitBench v2: **46%** (BullshitBench independent benchmark, via aireleasetracker.com)
- BenchAlign retrospective: **29.6/100, #175 of 211** models (benchlm.ai, October 2026 snapshot — context for how the field moved)
- METR preliminary autonomy evaluation exists for the June version (metr.org report, Oct 2024) — qualitative, no headline % cited
- HLE / LCR / CritPt: no verified public score found (benchmarks postdate the model)

Coding:

- SWE-bench Verified: **49.0%** (Oct 2024 version; June version 33.4%) — both per Anthropic (Oct figure via winzheng/chatforest; 33.4% via aireleasetracker lab data)
- HumanEval: **92.0%** (Anthropic June 2024 launch table)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found (postdate the model)

Long context:

- 200K-window model; no MRCR / RULER / GraphWalks numbers — no long-context retrieval reported (benchmarks postdate the model).

### Normalized scores (1–100)

- **Tool use: 45/100.** Pioneered computer use (OSWorld 14.9% was SOTA in Oct 2024) and posted TAU-bench 62.6% retail; on the 2026 scale these numbers are far below current frontier agents — legacy cap.
- **Reasoning: 40/100.** GPQA 59.4% was strong in mid-2024 but is roughly half of current frontier scores; no thinking mode; BenchAlign now ranks it #175/211 at 29.6/100.
- **Context window: 45/100.** 200K window with 8K max output was standard-era; well below the 1M-class actors of 2026, and no retrieval-quality measurements exist.
- **Multimodal: 40/100.** Image (vision) input was its era's selling point, but text-only output, no audio/video, and vision quality long surpassed — above text-only floor, clearly legacy.
- **Coding: 50/100.** SWE-bench Verified 49.0% held the record in late 2024 and HumanEval 92% was top-tier then; both are entry-level on today's scale.
- **Cost efficiency: 35/100.** $3/$15 per 1M was mid-tier in 2024; by 2026 standards it is expensive per unit of capability (GPT-6.1 Sol delivers an AA Index 52 at $2/$10; this model scores far lower at $3/$15).
- **Overall Score: 44/100.** Half-up mean of (45+40+45+40+50)/5 = 44.0 → 44 minus-era adjustment lands at 44; reported as the straight half-up mean 44. Best fit: none for new deployments — historical reference / regression-testing anchor only; replaced several times over by the Sonnet 4.x/5.x line.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (aireleasetracker.com, benchlm.ai, metr.org, llm-stats.com, chatforest.com, winzheng.com, Anthropic launch coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
