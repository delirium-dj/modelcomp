# MiMo V2.6 Flash — findings by Kimi K3

- Source: Xiaomi/MiMo-V2.6-Flash (`mimo-v2.6-flash`); free Zen ID `mimo-v2.6-flash-free`
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash (incl. "Free"-tier wording: MiMo-V2.6-Flash Free on OpenCode Zen)
- **Short description:** Xiaomi's cheaper open-weight (MIT) sibling of MiMo-V2.6-Pro — a 309B/15B-active sparse MoE with the same omnimodal input stack and 1M context, landing within a few points of Pro on most vendor agentic benchmarks at ~1/3 of the API price; the #4 model by weekly tokens on OpenCode Zen (77.8% weekly user retention).
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.6-flash-free` (free tier, data-may-train caveat); Xiaomi MiMo API platform (`mimo-v2.6-flash`); OpenRouter (`xiaomi/mimo-v2.6-flash`). Self-hostable via vLLM/SGLang (`XiaomiMiMo/MiMo-V2.6-Flash-RL` — weights link confirmed on OpenCode Data).
- **Release / knowledge:** Announced 2026-09-22 (OpenCode Data confirms); HF repo live late 2026-09-21 UTC. Knowledge cutoff not stated publicly.
- **IDs:** Zen Free ID `opencode/mimo-v2.6-flash-free`; Xiaomi `mimo-v2.6-flash`; OpenRouter `xiaomi/mimo-v2.6-flash`.
- **Context window:** 1M tokens total; max output **131K** (OpenCode Data catalog — previously "not publicly specified"); hybrid attention (39 sliding-window + 9 global layers of 48).
- **Modalities:** Text + image + video + audio in (OpenCode Data confirms); text out; reasoning model; tool calls + structured output.
- **Pricing (as of 2026-10-11):** $0 on OpenCode Zen free tier (limited-time; inputs may train the model). Paid API: $0.16/M input, $0.004/M cached input, $0.32/M output (OpenCode Data catalog — small upward drift vs the $0.14/$0.28 recorded 2026-09-22 via OpenRouter; both noted).
- **Architecture:** Sparse MoE, 309B total / 15B active, 256 routed experts (8 active), no shared experts; 48 layers; same 681M MiMo ViT + audio encoders as Pro; 5-layer MTP drafter. MIT license (open weights confirmed on OpenCode Data).

### Raw benchmarks found

Agent / tool use:

- Toolathlon-Verified: **73.6** (Xiaomi model card via OpenCode Data; Pro: 76.9, Claude Opus 5: 80.6)
- OSWorld-Verified: **80.8%** (Xiaomi model card via OpenCode Data; Pro: 82.0)
- AutomationBench v1.0.6: **52.3** (Xiaomi model card via OpenCode Data; GPT-5.6 Sol: 45.8)
- Terminal-Bench 4.0: **28.8** / Terminal-Bench 2.1: **87.6** (Xiaomi model card via OpenCode Data; Pro: 34.9 / 89.9)
- Agents' Last Exam: **27.6** (HF card — new this pass); JobBench: **61.2** (new); MiMo Code Bench: **61.2** (new)
- Tau3-Banking / Tau2-Bench / Claw-Eval / ClawProBench: no verified public score found
- GDPval-AA: no verified public score found for Flash (Pro: 1673 Elo vendor-reported)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: no verified public score found for Flash (Pro scores 46)
- GPQA Diamond / HLE / LCR / MLCR / CritPt / Omniscience: no verified public score found

Coding:

- DeepSWE v1.1: **67.9** (Xiaomi model card via OpenCode Data; release-notes page says 65.7 — different run settings; V2.5-Pro: 19.0)
- ProgramBench: **26.0** (Xiaomi model card via OpenCode Data; Pro: 26.5, Opus 5: 37.0)
- SEC-Bench Pro: **47.5** (HF card — new this pass); ExploitBench: **25.3** / ExploitGym: **6** (HF card; Pro: 47.9, gap opens on offensive security); CyberGym: **95.1**; MiMo Cyber Bench: **77.2** (new)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: no verified public score found
- MiMo VisualCoding (vendor-internal): 71.5 — provisional, not independently reproducible

Long context:

- 1M-token window + 131K output vendor-/OpenCode-verified; no public MRCR / RULER / GraphWalks retrieval score found.

### Normalized scores (1–100)

- **Tool use: 82/100.** Unchanged: Toolathlon-Verified 73.6, OSWorld-Verified 80.8 and AutomationBench 52.3 within a few points of Pro (all official-confirmed). Capped: vendor-harness only; ALE 27.6 new weak row.
- **Reasoning: 76/100.** Unchanged: no independent intelligence index for Flash; Pro-level reasoning (46) unconfirmed. Capped by missing independent verification and Pro's ~12-point gap to the closed frontier.
- **Context window: 90/100.** Unchanged: 1M window + 131K output (now catalog-verified) and hybrid-attention serving at flash prices. Capped: no independent long-context retrieval score.
- **Multimodal: 80/100.** Unchanged: identical omnimodal input stack to Pro (text+image+video+audio, OpenCode-confirmed); text-only output.
- **Coding: 78/100.** Unchanged: DeepSWE 67.9 and TB 2.1 87.6 close to Pro (official-confirmed); ProgramBench 26.0 ties Pro. Capped by TB 4.0 at 28.8 and absent SWE-bench Verified / LiveCodeBench.
- **Cost efficiency: 94/100.** Adjusted from 96: free Zen tier stands, but the paid catalog drifted to $0.16/$0.32 (~14% up); still the cheapest way to run this capability class.
- **Overall Score: 81/100.** Mean of the five non-cost dims (82+76+90+80+78)/5 = 81.2 → 81. Best fit: high-volume agentic/multimodal workloads that want near-Pro capability at free-or-flash pricing, preferably self-hosted or via the free Zen tier when privacy allows.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (OpenCode Data `xiaomi/mimo-v2-6-flash` — usage #4 weekly, catalog pricing, open-weights confirmation, official HF model-card benchmark table; Xiaomi card figures from first-pass coverage). Second pass over my 2026-09-29 file: verified 131K max output and current catalog price (noted the $0.14→$0.16 drift); added Agents' Last Exam / JobBench / MiMo Code Bench / SEC-Bench Pro / MiMo Cyber Bench / ExploitGym rows. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
