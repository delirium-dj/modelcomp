# Muse Spark 1.1 — findings by MiMo 2.6 Flash

- Source: Meta Superintelligence Labs (`muse-spark-1.1`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' second model (released 2026-07-09 with the public preview of the Meta Model API) and the first Muse Spark developers could actually build on — a multimodal reasoning model for agentic tasks with **native computer use**, active management of its full 1M window (remember/retrieve/compact), and what MSL called a "step-change" over the April original (code name Avocado; +8 AA Index points in three months, then re-based). AA launch analysis: Index **51**, tied with GPT-5.4 (xhigh) and GLM-5.2 (max), most token-efficient of its tie group (94M output tokens for the full Index), ~**$0.26 per Index task** — cheapest of its intelligence tier except GPT-5.6 Luna. Vendor claims parity with GPT-5.5/Opus 4.8 on agentic tasks; independent rows later softened (Index 33.7–34.3 on the current v4.3 scale).
- **Provider / access:** Meta Model API public preview (launch: **US-only, waitlisted, deliberately off OpenRouter** per CNBC/Reuters; OpenRouter listing `meta/muse-spark-1.1` appeared ~2026-09-11), Meta AI app/meta.ai (Thinking mode), Command Code; $20 free credits at signup; expected to power WhatsApp/Instagram/Facebook/glasses chatbots.
- **Release / knowledge:** released 2026-07-09; knowledge cutoff not published.
- **IDs:** `muse-spark-1-1` / `meta/muse-spark-1.1`.
- **Context window:** **1,048,576 tokens** (1.05M via OpenRouter), max output 131,072; self-managed context (retrieve + compact).
- **Modalities:** **text + images + video + audio + PDF documents in** (AI Atlas/OpenRouter), text out; reasoning yes (`reasoning_effort`, thinking billed as output; launch evals at xhigh); tool calls yes (computer use driving a real desktop from plain-language goals, function calling, OpenAI/Anthropic SDK-compatible).
- **Pricing (as of 2026-10-07):** **$1.25 in / $4.25 out** per 1M (exactly the methodology's mid-tier anchor — 88 baseline), cache read **$0.15** (~88% off; effective agent-loop input ~$0.48), $20 one-time credits; thinking tokens bill as output so heavy reasoning raises real cost.
- **Architecture:** proprietary (closed weights), size undisclosed; MSL's follow-up "Watermelon" larger model was in training.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **80.8** (Meta, xhigh, provider-reported) — **clears the 75% ref**
- MCP Atlas (1,000 tasks / 36 servers): **88.1 ±1.95** (Scale AI benchmark owner) — **clears the 75% ref**, top-band
- Terminal-Bench 2.1: **80.0** (Meta) / **77.9** (AA independent, e2b) / 76.2 (TB2.1 verified submission) — **under the 85% ref**
- Terminal-Bench 4.0: **6.06** (AA independent) — floor
- AutomationBench-AA: 42.8 (AA independent); JobBench 54.7 (OpenCode harness); Finance Agent v2: 57.2 (Vals); τ³-Banking: 31.75 (AA); GDPval-AA v2: 43.66% / 1376 Elo at launch (+232 over 1.0); AA Agentic Index: 37.54 (BenchLM)
- AA Coding Agents composite: **54.9** ($1.44/task, Opencode); ALE: no row found

Reasoning / knowledge:

- GPQA Diamond: **89.8** (AA independent, xhigh) — **misses the 90%+ ref by 0.2**
- HLE text-only: **46.2** (AA independent) — **clears the 40%+ ref**; Meta's HLE with tools: 62.1 (bash + browser, provider-reported — different protocol, not merged)
- AA Intelligence Index: **51** (AA, launch-era v4.1) → **34.3** (v4.3, 2026-09-16) / 33.7 (Command Code) — **under the 60+ ref on every scale** (scale correction noted)
- LiveBench (2026-06-25): 75.3 overall, **Reasoning 87.7**, Mathematics 87.1 (official board); CritPt 15.1 (AA)

Coding:

- SciCode: **58.2–58.8** (AA independent) — **clears the 55%+ ref**; was **#3 of all models at launch** (behind Fable 5 60, Gemini 3.1 Pro Preview 59)
- AA Coding Index: **71** (launch, +12 over 1.0) / **71.3** current — **clears the 70+ ref**
- DeepSWE 1.1: **53.0** (DataCurve benchmark owner, xhigh) — **under the 74%+ ref**
- SWE-bench Pro (public): **61.5 ±3.1** (Scale AI, mini-swe-agent) — strong; LiveBench Coding 77.2, Agentic Coding 58.5 (official boards); no SWE-V / SWE-Interact rows
- Meta Internal Coding Bench: "significantly improves on Muse Spark, competitive with leading alternatives" (vendor, no figure)

Long context:

- 1M window with active compaction; **AA-LCR: 81.3** (AA independent, 2026-08-27) — solid retrieval-at-length evidence.

Multimodal (vendor rows):

- BabyVision: 76.3; CharXiv-R (chart reasoning): **88.4**; full modality list includes video/audio/PDF but **no audio/video benchmark rows** were published.

### Normalized scores (1–100)

- **Tool use: 84/100.** Clears both headline tool refs — OSWorld 80.8 and MCP Atlas 88.1 — plus AutomationBench-AA 42.8 in the independent lane; TB2.1 77.9–80 misses the 85 ref, TB4.0 6.06 is a floor reading, no ALE row.
- **Reasoning: 83/100.** HLE 46.2 (text-only, independent) clears its ref and GPQA 89.8 is a rounding error from it; the AA Index (51 launch → 34 current) never approaches 60 on any scale.
- **Context window: 95/100.** 1.05M → ≥1M floor, actively managed, with AA-LCR 81.3 as independent retrieval confirmation — good but not the ≥98%-at-512K class needed to exceed the floor.
- **Multimodal: 91/100.** The full non-text suite (image + video + audio + PDF) in → audio/non-text band (90–100); CharXiv-R 88.4 and BabyVision 76.3 are the only concrete rows, so it sits near the floor of its band.
- **Coding: 82/100.** Two coding refs clear (SciCode 58.8 — top-3 at launch — and coding index 71.3), SWE-Pro 61.5 is respectable; DeepSWE 53 misses badly, TB2.1 misses the 85 ref, TB4.0 is 6.
- **Cost efficiency: 89/100.** Exactly at the $1.25/$4.25 anchor with ~88% cache reads, ~$0.26 per Index task (cheapest in its intelligence tier but for Luna), and $20 free credits; docking for thinking-tokens-as-output inflation and the launch-era US-only waitlist (alleviated by the later OpenRouter listing).
- **Overall Score: 87/100.** (84+83+95+91+82)/5 = 87.0 → 87 — Meta's strongest value play: full-modality input, ref-clearing OSWorld/MCP-Atlas/SciCode/HLE, 1M self-managing context, at anchor pricing — held to 87 by GPQA's 0.2 miss, an Index that re-based into the 30s, DeepSWE at 53, and a TB4.0 that never got off the floor.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Meta AI launch blog, Artificial Analysis launch analysis + leaderboards, Writingmate spec sheet, Lumina evidence registry, AI Atlas, AReiter pricing guide, Command Code, Jason Futrill); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
