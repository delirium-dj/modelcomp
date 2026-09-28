# ByteDance Seed 2.0 Pro — findings by Qwen 3.8 27B

- Source: ByteDance (Seed team) — Doubao-Seed-2.0-Pro
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro (Doubao-Seed-2.0-Pro)
- **Short description:** ByteDance's proprietary "agent-era" flagship general model of the Seed 2.0 generation: complex reasoning, long-horizon multi-step planning, visual-text reasoning, hour-long video understanding, and tool-augmented execution. Superseded in the family by Seed 2.1 Pro/Turbo (2026); not a variant/alias of those.
- **Provider / access:** DeepInfra `deepinfra/ByteDance/Seed-2.0-pro` (partner model; JSON + function calling); also served on Volcengine plans (`doubao-seed-2-0-pro`, per the ClawProBench run source). No OpenCode Zen entry, no Free ID.
- **Release / knowledge:** exact release date for 2.0 Pro not published on the sources checked; Seed 2.0 family already present by 2026-02-14 (Seed 2.0 Code on BenchmarkList). Knowledge cutoff: not publicly stated.
- **IDs:** `deepinfra/ByteDance/Seed-2.0-pro` (no Zen ID; noFreeId)
- **Context window:** 256,000 tokens total; 65K max output (DeepInfra model card + repo curated entry).
- **Modalities:** text, image, video in (incl. hour-long video understanding and streaming real-time video analysis; vision input quality tiers low/high/xhigh); text out; reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-09-28):** $0.50 in / $3.00 out / $0.10 cached per 1M on DeepInfra (partner model). Paid tier.
- **Architecture:** Proprietary, closed; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use (all from BenchmarkList `doubao-seed-2.0-pro` page, 20 benchmarks, ByteDance provider; ranks as listed):

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: ClawProBench **61.07** final (rank 10/48, 81st pct; sub-scores Tool Use 73.1%, Planning 70.1%, Efficiency 97.4%, Safety 68.3%; run via Volcengine plan)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Extras: VitaBench 2.0 **47.4%** Avg@4 full context (rank 3/22, 90th pct), EgoBench **38.7%** dynamic-easy micro (rank 3/8), MobileGym **52.0%** overall success (rank 2/11, 90th pct), DiscoBench **43.1%** neutral acc (rank 1/12), Trip+ **64.7%** plan avg (rank 7/18), TERMS-Bench **52.2% SE+** (rank 11/12)

Reasoning / knowledge:

- GPQA Diamond / HLE / CritPt / MRCR-LCR / AA Intelligence Index: no verified public score found for this exact model
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Multimodal-reasoning proxies: MMGist **58.2** macro (rank 3/28, 93rd pct; STEM 57.6, Perception 70.2, Spatial 74.9), MMErroR **64.8%** (rank 2/14, 92nd pct; field leader 66.65%), BilliardPhys-Bench **48.5%** weighted (rank 7/13)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: SaaS-Bench (computer-use agents) **27.1%** overall (rank 9/15); vendor claims "agentized coding" without public numbers

Long context:

- 256K context window confirmed via DeepInfra card; no MRCR/RULER/GraphWalks retrieval value reported at 256K.

Multimodal:

- Image + video in: MMGist **58.2** (93rd pct of 28 LVLMs), MMErroR **64.8%** (rank 2/14), VisualNeedle w/ tools **36.8%** (rank 3/9), Visual Aesthetic Benchmark **51.3%** (rank 8/25), MindEdit-Bench spatial **25.4%** (rank 3/17, 88th pct).

### Normalized scores (1–100)

- **Tool use: 68/100.** ClawProBench composite 61.07 with Tool-Use 73.1% and Planning 70.1%, plus 90th-pctile VitaBench 2.0 (47.4%) and MobileGym (52.0%), places it in the mid band (50–70) upper half; no Terminal-Bench 2.1 / GDPval / Tau numbers to push it to frontier.
- **Reasoning: 65/100.** No verified GPQA/HLE/AA-Index for this exact model; the strong multimodal-reasoning proxies (MMGist 58.2 at 93rd pct, MMErroR 64.8% second-best in field) support a solid mid-band score, capped by the absence of standard reasoning-benchmark evidence.
- **Context window: 72/100.** 256K total / 65K out sits in the 200K–500K band (65–84; 200K = 70), slightly above the band floor; no long-context retrieval measurement found to raise it.
- **Multimodal: 85/100.** Verified image + video in with hour-long and streaming video analysis (75–90 band for video/PDF in); rank-2/3-of-field results on MMGist, MMErroR, VisualNeedle, and MindEdit support the upper half; text-only output keeps it under the omni 90–100 tier.
- **Coding: 52/100.** No verified SWE-bench / LiveCodeBench / SciCode / Vibe numbers exist for this exact model; the only public coding-adjacent result is SaaS-Bench 27.1% (rank 9/15), so the score reflects limited verified evidence rather than demonstrated strength.
- **Cost efficiency: 87/100.** $0.50/$3.00 per 1M with $0.10 cache reads lands between the ~$0.60/$2.20 (≈92) and $1.25/$4.25 (≈88) reference points; output price is the drag.
- **Overall Score: 68/100.** Mean of 68/65/72/85/52 = 68.4 → 68 (half-up); best fit: long-video / visual-reasoning and enterprise agent tasks at mid price, not a coding workhorse until coding benchmarks surface.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-28
- Method: public internet research (BenchmarkList ByteDance provider + Doubao-Seed-2.0-Pro model page, DeepInfra model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
