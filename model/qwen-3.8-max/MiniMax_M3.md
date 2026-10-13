# Qwen 3.8 Max — findings by MiniMax M3

- Source: Alibaba Cloud (`alibaba/qwen3-8-max`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba Cloud's flagship 2.4T sparse MoE (95B active per token) with 1M multimodal context and flat $2/$6 pricing, competing on reasoning and long-context value. First Max-class Qwen model with open weights.
- **Provider / access:** QwenCloud / DashScope API (`qwen3.8-max`); Vercel AI Gateway `alibaba/qwen3.8-max` (no markup). OpenAI- and Anthropic-compatible endpoints. Not yet on OpenCode's registry as of 2026-08-03.
- **Release / knowledge:** Released 2026-08-03; weights shipped ~2026-08-12/13 as `Qwen3.8-2.4T-A95B` (text-only, custom license, ~400GB+ even at 1-bit). The 27B companion released 2026-08-13/14 under Apache 2.0.
- **IDs:** `qwen3.8-max` (DashScope); `alibaba/qwen3-8-max` (Vercel). No Free ID.
- **Context window:** 1M tokens — 991K max input / 131K max output / 262K max reasoning chain.
- **Modalities:** Text, image, and video in; text out. Qwen-MM-Plugins (vision harness extension: video memory, dynamic resolution, visual tool use) is bundled.
- **Pricing (as of 2026-10-13):** Paid $2.00 input / $6.00 output per 1M; implicit cache read $0.25 (8× uncached); explicit cache creation $2.50; explicit cache read $0.17. One-time 1M-token free quota on signup. No Zen Free ID.
- **Architecture:** Sparse MoE — 2.4T total parameters, 95B active per token. Built on Qwen 3.5 architectural foundation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6** (Qwen announcement, vendor) — vs Opus 4.8 84.6, Fable 5 84.6, GPT-5.6 Sol 88.8.
- SWE-bench Pro: **67.7** (Qwen announcement, vendor) — vs Opus 4.8 69.2, Fable 5 80.0, GPT-5.6 Sol 64.6.
- DeepSWE 1.1: **56.6** (Qwen) — trails Opus 4.8 59.0, Fable 5 70.0, GPT-5.6 Sol 73.0.
- FrontierSWE: **73.5** (Qwen) — vs Opus 4.8 70.0, Fable 5 88.8.
- SkillsBench: **70.2** (Qwen; OpenCode harness) — vs Opus 4.8 65.1, Fable 5 70.9, GPT-5.6 Sol 73.5.
- JobBench: **53.4** (Qwen) — vs Opus 4.8 48.4, Fable 5 57.4, GPT-5.6 Sol 45.4.
- GDPval-AA Elo / Toolathlon / MCP-Atlas: **no verified public score found** for this exact model/ID at the AA v2.1 harness.
- Tau3-Banking / Claw-Eval / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (Qwen announcement, vendor) — vs Opus 4.8 92.0, Fable 5 92.6, GPT-5.6 Sol 94.1.
- HLE / LCR / MLCR / Humanity's Last Exam / CritPt / Omniscience Index: **no verified public score found** for this exact model/ID at independent third-party harness.
- AA Intelligence Index v4.x: **no verified public score found** (Qwen 3.8 Max is "not yet indexed" per Yotta Labs, 2026-08-04).

Coding:

- Terminal-Bench 2.1 86.6, SWE-bench Pro 67.7, DeepSWE 56.6, FrontierSWE 73.5 (see above).
- LiveCodeBench / SciCode / Vibe Code Bench / Coding Index: **no verified public score found** for this exact model/ID.
- PaperBench: **93.0** (Qwen announcement, vendor) — vs Opus 4.8 80.3, Fable 5 88.8, GPT-5.6 Sol 90.5. Qwen's strongest published number.

Long context:

- OSWorld-Verified: **86.1%** (Qwen announcement) — LEADS Opus 4.8 83.4, Fable 5 85.0, GPT-5.6 Sol 83.2.
- RealWorldQA: **88.0** (Qwen) — LEADS Opus 4.8 76.6, Fable 5 85.9, GPT-5.6 Sol 83.7.
- MRCR / RULER / GraphWalks at window length: **no long-context retrieval reported** for this exact model/ID.
- Reasoning chains extend to 262K tokens (per Qwen spec) — capability advertised, not benchmark-graded.

Independent verification:

- Real-world architecture evaluation (Yotta Labs): Qwen 3.8-Max preview scored **80/100** vs Kimi K3's **83/100** — both analyzing 269 files across two real projects, blind-reviewed. All 44 of Qwen's tool calls succeeded (Yotta, 2026-08-04).
- Stealth Code Arena preview: coding-preference Elo in frontier range (community tracking; fragile unofficial identification, not a score sheet).

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 86.6 (top of vendor table). SkillsBench 70.2 (OpenCode harness). JobBench 53.4. Strong on long-horizon loops (Tianchi: 24h autonomy, 87% of 526 human teams). Capped at 88 because Toolathlon / MCP-Atlas / GDPval-AA for this exact model/ID are not published.
- **Reasoning: 88/100.** GPQA Diamond 92.6% (LEADS the comparison set). PaperBench 93.0 (LEADS the comparison set). Independent architecture eval 80/100. Capped at 88 because AA Intelligence Index for this exact model/ID is not published and HLE / LCR independent runs are missing.
- **Context window: 98/100.** 1M context (991K input, 131K output, 262K reasoning). Qwen-MM-Plugins for video/dynamic resolution harnesses. Capped at 98 because no MRCR / RULER figure at window length is published for this exact model/ID.
- **Multimodal: 88/100.** Text + image + video in. RealWorldQA 88.0 (LEADS the comparison set). Qwen-MM-Plugins bundled for visual tool use. Capped at 88 because no native audio/PDF; MMMU-Pro independent score not published for this exact model/ID.
- **Coding: 84/100.** Terminal-Bench 2.1 86.6 + SWE-bench Pro 67.7 + DeepSWE 56.6 + FrontierSWE 73.5 — beats Opus 4.8 on several, trails on DeepSWE. OSWorld-Verified 86.1 (LEADS comparison). Capped at 84 because the LiveCodeBench / SciCode independent re-runs for this exact model/ID are not published.
- **Cost efficiency: 78/100.** $2 in / $6 out; implicit cache $0.25 (8× discount). One-time 1M-token free quota. Capped at 78 because list price is 60% above Qwen 3.7 Max ($1.25/$3.75) and 14× DeepSeek V4 Flash on input.
- **Overall Score: 89/100.** Half-up mean of Tool 88, Reasoning 88, Context 98, Multimodal 88, Coding 84 = 446/5 = 89.2 → half-up 89. Qwen 3.8 Max is a strong open-weights frontier contender: best-in-class PaperBench (93.0) and 1M multimodal context with bundled Qwen-MM-Plugins for video/dynamic resolution, but Coding trails the closed frontier on the independent LiveCodeBench / SciCode axis.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: public internet research (Qwen 3.8-Max announcement via developersdigest.tech launch summary, DataCamp Qwen3.8-Max spec page, Yotta Labs independent verification, Vercel AI Gateway changelog, DashScope / QwenCloud docs). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max_Alibaba.md`, using the same headings.