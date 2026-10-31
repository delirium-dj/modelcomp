# Gemini 3 Pro — findings by GLM 5.2 Coding

- Source: Google (`gemini-3-pro`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's flagship "most intelligent model" opening the Gemini 3 era, released 2026-11-18 → corrected: 2025-11-18 (LLM Stats) in preview; "best model in the world for multimodal understanding" and "most powerful agentic and vibe coding model yet." LMArena 1501 Elo breakthrough; HLE 37.5% no-tools; GPQA Diamond 91.9%; Deep Think mode adds HLE 41.0% / GPQA 93.8% / ARC-AGI-2 45.1% (code execution, verified). Shipped day-one into Search AI Mode, Gemini app, AI Studio, Vertex, and launched Google Antigravity (agent-first IDE) alongside.
- **Provider / access:** Google Gemini API / AI Studio / Vertex AI / Gemini Enterprise; Gemini CLI; Google Antigravity; third-party: Cursor, GitHub, JetBrains, Manus, Replit. Consumer: Gemini app (+ Gemini Agent for AI Ultra), AI Mode in Search. Deep Think: safety testers first, then AI Ultra.
- **Release / knowledge:** 2025-11-18; knowledge cutoff January 2025 (LLM Stats) — 10 months stale by Oct 2026.
- **IDs:** `google/gemini-3-pro-preview` (LLM Stats slug) → `gemini-3-pro` docs. Family: Gemini 3 Flash, 3.1 Pro, 3.5/3.6/3.7/3.8 Flash cadence through 2026; Gemini 4 Argon (2026-09-30) is the current frontier.
- **Context window:** 1M in / 65.5K out (LLM Stats; 1M "learn anything" claims in post).
- **Modalities:** native multimodal — text, image, video, audio, code in (Gemini-native since v1); text out; "spatial understanding"; code-gen visualizations (tokamak plasma demo).
- **Pricing (as of 2026-10-09):** $2.00 / $12.00 per 1M in/out (LLM Stats; no cached rate listed); TTFT p95 0.60s — the fastest frontier TTFT tracked alongside Sonnet 5.5's 0.40s.
- **Architecture:** proprietary, closed weights; parameters undisclosed; most comprehensive Google safety-eval set to date (UK AISI access, Apollo/Vaultis/Dreadnode independent assessments; reduced sycophancy, prompt-injection resistance).

### Raw benchmarks found

> Primary: Google launch post 2025-11-18 (vendor). Note: this is an 11-month-old model by Oct 2026 — scores below were launch-day frontier, since exceeded by 3.1 Pro / 3.8 Flash / Argon.

Reasoning / knowledge:

- LMArena: **1501 Elo** — breakthrough score, leaderboard #1 at launch.
- Humanity's Last Exam: **37.5%** no-tools; Deep Think **41.0%** (vs the 60–67% with-tools tier of late-2026 flagships — different condition, no-tools).
- GPQA Diamond: **91.9%**; Deep Think **93.8%** (Astra's 96.0% later topped).
- MathArena Apex: **23.4%** — new SOTA at launch.
- SimpleQA Verified: **72.1%** — SOTA factual accuracy at launch.
- ARC-AGI-2 (Deep Think, code execution, ARC Prize Verified): **45.1%** — "unprecedented" at launch; note ARC-AGI-3 generation later reset this axis.

Multimodal:

- MMMU-Pro: **81%**; Video-MMMU: **87.6%** — multimodal-reasoning SOTA at launch.

Coding / agent:

- WebDev Arena: **1,487 Elo** — leaderboard top (3.7 Flash later hit 1,588).
- Terminal-Bench 2.0: **54.2%** (terminal/computer tool use).
- SWE-bench Verified: **76.2%** — greatly outperformed 2.5 Pro at launch.
- Vending-Bench 2: **topping leaderboard** — full simulated year of consistent tool use/planning (no number in post).

Long context:

- 1M in / 65.5K out; no MRCR/RULER row — no retrieval score found.

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded. Scored as-of-Oct-2026 standing (the site compares current models), with launch-day context noted.

- **Tool use: 82/100.** TB 2.0 54.2%, Vending-Bench 2 #1 (year-horizon consistency), Antigravity/agent-first positioning, 0.6s TTFT; but TB 4.0-generation tables (34.9–66.4%) have no Gemini 3 Pro rows and SWE-bench 76.2% is the older benchmark gen — agent tier clearly below the Sept-2026 flagships.
- **Reasoning: 86/100.** GPQA 91.9/93.8 DT, HLE 37.5/41.0 no-tools (launch SOTA), MathArena Apex 23.4 SOTA, SimpleQA 72.1 — a deep bench for its era; held under the 2026 flagships' with-tools HLE 60–67% and ARC-AGI-3-era scores; Jan-2025 cutoff is the durability tax.
- **Context window: 93/100.** 1M in verified; 65.5K out is half the 128K-class; no retrieval score.
- **Multimodal: 90/100.** Native text+image+video+audio+code in — "best model in the world for multimodal understanding" at launch; MMMU-Pro 81, Video-MMMU 87.6; text out only.
- **Coding: 85/100.** SWE-bench Verified 76.2%, WebDev Arena 1,487, vibe-coding leadership, Antigravity-native; superseded by 3.8 Flash/Argon on DeepSWE-gen benches.
- **Cost efficiency: 82/100.** $2/$12 with 0.60s TTFT was strong at launch; by Oct 2026, 3.7 Flash ($0.75/$3.75) and 3.8 Flash deliver more per dollar in-family — the value case migrated down the family tree.
- **Overall Score: 87/100.** (82 + 86 + 93 + 90 + 85) / 5 = 87.2 → 87. Best-fit (historical): the Nov-2025 frontier multimodal default that still holds a top-10 aggregate; as of Oct 2026 route new work to 3.1 Pro/3.8 Flash/Argon unless multimodal-native breadth at 1M context with sub-second TTFT is the requirement.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (Google launch post gemini-3 primary — CEO note, benchmarks, Deep Think, Antigravity, safety; LLM Stats page for pricing/context/cutoff/TTFT); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.