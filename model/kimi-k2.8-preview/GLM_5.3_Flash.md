# Kimi K2.8 Preview — findings by GLM 5.3 Flash

- Source: Moonshot AI (`kimi-for-coding` — K2.8 Preview inside Kimi Code)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview (membership-bundled mainstream coding model; no Free-tier API wording)
- **Short description:** Moonshot AI's quiet September 11, 2026 upgrade inside Kimi Code — the mainstream workhorse between flagship K3 and fast K2.7 Code HighSpeed, reusing the `kimi-for-coding` ID so existing clients upgraded automatically. Officially "comprehensive capability close to K3" with better thinking efficiency; also the unified base for all non-thinking Kimi Code workloads.
- **Provider / access:** Kimi Code (Moonshot) only — model ID `kimi-for-coding` (mapped to K2.8 Preview since Sept 11, 2026; previously K2.7 Code); some directories list `kimi-k2-8-preview`. Available to all Kimi membership tiers; no third-party providers (unlike open-weights K2.7 Code). Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released September 11, 2026, full rollout in Kimi Code; Moonshot's official social accounts had not formally announced it at launch (dev-observed). Knowledge cutoff not published.
- **IDs:** `kimi-for-coding` (Kimi Code; the ID now resolves to K2.8 Preview), `k3` routing applies for thinking-enabled flagship traffic. No per-token API ID.
- **Context window:** 1,048,576 tokens (1M) — open to all membership tiers, unlike K3's 1M (restricted to Allegretto+; Moderato capped at 256K). Output cap not published. Verified from Kimi Code docs.
- **Modalities:** Text, image and video input; text out. Thinking tiers low/high/max (default max, same tier definitions as K3); requests with thinking disabled are routed to K2.8 Preview's non-thinking pipeline.
- **Pricing (as of 2026-09-19):** Kimi membership plan — no per-token billing published. Early developer measurements: ~1/3 faster task completion and ~30% lower cost than K3 per task. Old context caches invalidate on model switch (official advice: start a new session).
- **Architecture:** Proprietary, closed weights (unlike Modified-MIT K2.7 Code). Parameter count not published — described as "smaller and cheaper" than 2.8T K3. Preview stage: capability and default configuration may change.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau2 / Tau3 / GDPval / MCP-Atlas / Claw-Eval: no verified public score found — Moonshot had not released K2.8 Preview benchmark metrics as of 2026-09-14 (official docs state only "comprehensive capability approaches K3")
- Independent signal (non-benchmark): developer side-by-sides report a single task finishing roughly one-third faster than K3 with ~30% lower cost

Reasoning / knowledge:

- GPQA / HLE / AA Intelligence Index / LCR / MRCR: no verified public score found
- Positioning only: near-K3 capability, improved thinking efficiency vs K2.7 Code (official docs)

Coding:

- SWE-bench Verified / Pro / LiveCodeBench / SciCode / DeepSWE / SWE-Atlas: no verified public score found
- Kimi Code Bench v2: no K2.8 Preview row published (sibling K2.7 Code: 62.0% on llm-stats)
- Positioning: one-pass success on complex tasks still behind K3 (early developer tests)
- Serves as the base for ALL non-thinking Kimi Code requests since Sept 11, 2026

Long context:

- 1M context open to all membership tiers (Kimi Code docs); no MRCR/RULER retrieval numbers published

### Normalized scores (1–100)

- **Tool use: 68/100.** No published agentic benchmark rows — scored provisionally from its role as Kimi Code's mainstream workhorse (near-K3 positioning, K3 benchmarks at 88) with a heavy evidence dock.
- **Reasoning: 65/100.** "Close to K3" is the only official capability claim; thinking tiers mirror K3 but zero public reasoning benchmarks exist. Provisional mid-frontier score.
- **Context window: 92/100.** Verified 1M window open to all membership tiers (the model's best-documented feature); no retrieval numbers published, so no 95+.
- **Multimodal: 78/100.** Image + video input documented in Kimi Code docs (75–90 video band); text-only output and preview-stage documentation keep it from the 80s.
- **Coding: 76/100.** Near-K3 positioning plus the `kimi-for-coding` production slot imply strong coding, but one-pass complex-task success is reported behind K3 and no benchmark is published — docked for evidence, not for positioning.
- **Cost efficiency: 85/100.** Membership-bundled (no per-token billing), ~30% cheaper per task than K3 in early tests, and 1M context for every tier — strong value, but pricing is plan-gated and not independently verifiable.
- **Overall Score: 75.8/100.** (68+65+92+78+76)/5 = 75.8. Best fit: everyday Kimi Code coding for members — near-flagship capability with better speed/cost than K3, pending published benchmarks.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-19
- Method: public internet research (fresh web search: Kimi Code documentation via 4SAPI dev guide, LLM-Stats comparison, launch coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

