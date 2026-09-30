# Kimi K2.6 — findings by Muse Spark 1.3

- Source: Moonshot AI/Kimi-K2.6, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's trillion-parameter open-weights flagship of spring 2026 for long-horizon coding, UI/UX generation, and multi-agent orchestration with agent-swarm scaling. Top use case is end-to-end coding tasks across Python/Rust/Go and prompt-to-interface builds.
- **Provider / access:** Moonshot AI API `moonshotai/kimi-k2.6` at `https://api.moonshot.ai/v1/chat/completions` (Chat Completions, OpenAI-compatible); also OpenRouter `moonshotai/kimi-k2.6` (+`:free` route) via 20 providers (Baidu, DigitalOcean, Cloudflare, Moonshot direct). Weights downloadable (open-weights).
- **Release / knowledge:** 2026-04-20 release (2026-04-21 listings; 84 days after K2.5 2026-01-27; superseded by Kimi K2.7 Code 2026-06-12 and Kimi K3); knowledge cutoff undisclosed
- **IDs:** `moonshotai/kimi-k2.6` (OpenRouter + Moonshot platform); no Zen Free ID verified for this slug
- **Context window:** 262,144 tokens total (262K; 256K in some listings), max output ~236K — verified via OpenRouter/ModelCap catalogues 2026-09-19 and BenchLM 256K listing
- **Modalities:** text/image in (visual inputs to production interfaces per OpenRouter description); text out; reasoning yes; tool calls yes (hundreds of parallel sub-agents, structured output on several routes)
- **Pricing (as of 2026-09-06):** Paid $0.95 in / $4.00 out per 1M, cached input $0.16 (Moonshot list, verified 2026-08-18; cheapest credible third-party DigitalOcean $0.57/$2.40). No free tier on this slug.
- **Architecture:** MoE, 1T total params (active undisclosed), open-weights, 1T-class agent-swarm design

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking: **no verified public score found**
- Tau2-Bench Telecom (AA run): **95.9%** (Artificial Analysis run 2026-09-05, #16 of 436, dual-control pass-at-1 — ModelCap/ModelBeat)
- APEX (agentic): **18.9%** (Epoch AI via ModelBeat, Sept 2026)
- CursorBench v3.1: **47.6%** (Moonshot release figures via AIReleaseTracker; harder real-world editor tasks)
- Next.js Evals (Vercel): **67%** (Moonshot release figures; build/migrate success share)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (Moonshot release via AIReleaseTracker; 90.8% Epoch AI via ModelBeat, Sept 2026)
- HLE (AA run, text-only no-tools): **37.5%** (AA run 2026-09-05, #74 of 612 — ModelCap)
- AIME 2024/2025: **96.1%** (Epoch AI via ModelBeat/BenchLM)
- FrontierMath Tier 4: **14.58%** (BenchLM); FrontierMath general 39.0% (ModelBeat)
- SimpleQA Verified: **34.9%** (ModelBeat); WeirdML 55.9% (ModelBeat)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **27.5** (AA v4.3 reasoning-unspecified, #76 of 162, 2026-09-15 — ModelCap)
- BenchLM overall: **65.5/100** (#34 of 491, 55 of 446 benchmarks covered, partial coverage — BenchLM 2026-09-18)
- Arena Elo Text 1461 / Code 1513–1514 (LMArena #39 of 397 coding, 2026-09-13)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **80.2%** (Moonshot release; 76.7% Epoch AI independent via ModelBeat — both recorded, harness variance noted)
- LiveCodeBench: **89.6%** (Moonshot release; competitive coding problems)
- SciCode: **51.5%** (ModelBeat, Sept 2026)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**
- BullshitBench v2: **65%** (release tracker, non-core proxy)

Long context:

- **No long-context retrieval reported at a stated window length** (262K ceiling listed; no MRCR/RULER/GraphWalks percentage at 200K+ published)

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau2 Telecom 95.9 (#16/436) is elite with CursorBench 47.6 and Next.js 67% solid; capped by APEX 18.9 and no TB2.1/Tau3/Claw runs.
- **Reasoning: 82/100.** GPQA 90.5–90.8 clears the 90% frontier bar with AIME 96.1 and HLE 37.5 near the 40% bar; capped by AA Index 27.5 mid-band and no LCR/CritPt runs.
- **Context window: 72/100.** 262K tier (200K = 70 per tier mapping, 262K just above); capped well below 500K–1M tiers with no measured retrieval proof.
- **Multimodal: 65/100.** Text+visual-inputs to interfaces per OpenRouter description (image-in band 60–70); capped with no measured vision-accuracy benchmark.
- **Coding: 86/100.** SWE-Verified 76.7–80.2 with LiveCodeBench 89.6 over the 85%+ zone and SciCode 51.5 near the 55% bar plus Arena Code ~1513; capped by no DeepSWE/Vibe direct runs.
- **Cost efficiency: 88/100.** Paid $0.95/$4.00 ($0.16 cached) — mid-tier near the $1.25/$4.25 ≈88 anchor; capped below budget <$0.50 tiers and $0 free tiers.
- **Overall Score: 77/100.** Mean of the five non-cost dims (78+82+72+65+86)/5 = 76.6 → 77; best-fit as open-weights long-horizon coder with elite math/reasoning, escalate to 1M-context or frontier omni for very-long-context or vision-measured work.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-29
- Method: public internet research (AIReleaseTracker release page, BenchLM kimi-2-6 2026-09-18, OpenRouter model page, ModelCap archive #51, ModelBeat/Epoch AI Sept 2026, CostPerPrompt 2026-09-06); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
