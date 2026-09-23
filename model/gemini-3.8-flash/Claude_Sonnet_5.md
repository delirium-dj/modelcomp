# Gemini 3.8 Flash — findings by Claude Sonnet 5

- Source: Google DeepMind / Google (`gemini-3.8-flash`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (no distinct "Free" tier name found; a separate variant "Gemini 3.8 Flash Cyber" exists for cybersecurity use cases via a restricted Fairwind Program and is a different, access-gated model — not covered here).
- **Short description:** Google DeepMind's "most intelligent Flash-tier" model in the Gemini 3 family, positioned as a workhorse for long-horizon software engineering, autonomous agents, and enterprise reasoning workflows, at Flash-level speed/cost.
- **Provider / access:** Google AI Studio (Gemini API), Vertex AI / Gemini Enterprise Agent Platform, Gemini app (Google AI Pro/Ultra subscribers), Android Studio, Google Antigravity. Uses Google's native `generateContent` Gemini API (not OpenAI-style Chat Completions or Responses API). No OpenCode Zen listing was found in sources reviewed — state explicitly: no verified Zen Free ID found.
- **Release / knowledge:** Generally available 2026-09-02 (Google blog, Google Cloud docs). Training-data knowledge cutoff not stated in any source reviewed.
- **IDs:** `google/gemini-3.8-flash` (API model string `gemini-3.8-flash`, per ai.google.dev docs).
- **Context window:** 1M tokens total input; 64K max output tokens (ai.google.dev "What's new" page). Verified via Google's own developer docs and corroborated by Artificial Analysis and BenchmarkList model pages (both list "1M").
- **Modalities:** Input: text, image, speech (audio), video (Artificial Analysis technical-specifications table). Output: text only. Reasoning: yes (tunable `thinking_level`: LOW / MEDIUM (default) / HIGH; MINIMAL not supported). Tool calls: yes (core agentic/tool-use focus per Google's launch post). JSON mode: not explicitly confirmed in sources reviewed.
- **Pricing (as of 2026-09-23):** Introductory pricing (through 2026-12-31): $0.75 / 1M input tokens, $3.75 / 1M output tokens (Google blog, footnote 1). Standard pricing from 2027-01-01: $1.50 / 1M input, $7.50 / 1M output. Cached-token pricing not stated in sources reviewed. No free tier specifically confirmed for this model in sources reviewed — treat as paid $.
- **Architecture:** Proprietary, closed-weights. Parameter count, MoE structure, and license not disclosed in Google's model card or blog. Model card states it "is based on Gemini 3.7 Flash" for architecture, training data, and hardware/software details, with no further specifics published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (BenchmarkList, rank 2 of 182; Google's own developer materials separately report 90.8%, cited via DataCamp analysis of Google docs)
- Tau3-Banking / Tau2-Bench: **45.8%** Pass@1 (BenchmarkList/Artificial Analysis banking-domain eval, rank 9 of 174)
- GDPval-AA: **1545 Elo** (BenchmarkList/Artificial Analysis, rank 21 of 340)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found (closest available proxy: AutomationBench 29.7% task success, rank 18 of 42, BenchmarkList)

Reasoning / knowledge:

- GPQA Diamond: **95.3%** (BenchmarkList, rank 2 of 464; BenchLM corroborates 95.3%)
- HLE: **47.8%** (BenchmarkList/BenchLM, rank 12 of 466); separately, HLE-Verified (1,811-item set): **54.9%** (BenchmarkList, rank 1 of 6; also stated directly in Google's launch post)
- LCR / MLCR: AA-LCR **82.0%** (BenchmarkList, rank 3 of 409)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **41** (high-effort variant; Artificial Analysis official model-release page, 28 of 673 models tracked). Note: BenchLM/BenchmarkList separately report this index at **58.7** (rank 9 of 418) — the two trackers disagree, likely due to differing Intelligence Index versions/snapshot dates; both are cited here since neither can be confirmed as stale.
- Omniscience Accuracy / Hallucination Rate: **54.6% / 55.2%** (BenchLM.ai, AA-Omniscience)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **54.4%** (BenchmarkList, rank 17 of 458)
- Vibe Code Bench: no verified public score found
- DeepSWE 1.1 (long-horizon SWE, mini-SWE-agent harness): **73.8%** Pass@1 (BenchmarkList, rank 4 of 33; Google's launch post states 3.8 Flash "outperforms most larger frontier models" on this eval without giving its own exact figure)

Long context:

- No MRCR/RULER/GraphWalks retrieval score reported. Closest available long-context evidence: AA-LCR (long-context reasoning, not pure retrieval) **82.0%** at unspecified context depth (BenchmarkList, rank 3 of 409).

### Normalized scores (1-100)

- **Tool use: 80/100.** Terminal-Bench 2.1 (89.4%) is at a frontier level on its own, but Tau3-Banking (45.8%) sits below the ~50% frontier bar and GDPval-AA (1545 Elo) is well under the ~1750 frontier threshold — a mixed profile that caps this below the 90-100 frontier band.
- **Reasoning: 90/100.** GPQA Diamond (95.3%) and HLE (47.8%) both clear frontier thresholds (90%+ / 40%+); the AA Intelligence Index readings (41 vs. 58.7, sources disagree) stay below the 60-point frontier bar, holding this just at the frontier boundary rather than deep into it.
- **Context window: 96/100.** Verified 1M-token total context (Google docs, corroborated by AA and BenchmarkList) places it in the ≥1M tier (95-100); no verified ≥98% retrieval score at 512K+ (MRCR/RULER) was found, so 100 is not awarded.
- **Multimodal: 90/100.** Confirmed text, image, speech (audio), and video input support (Artificial Analysis spec table) qualifies for the 90-100 "audio in" tier; output remains text-only.
- **Coding: 88/100.** DeepSWE 1.1 (73.8%) and SciCode (54.4%) sit just under their respective 74%/55% frontier thresholds, while Terminal-Bench 2.1 (89.4%) clears the 85%+ frontier bar — near-frontier but not fully there; no SWE-bench Verified or LiveCodeBench score could be found to corroborate further.
- **Cost efficiency: 90/100.** Introductory pricing of $0.75 in / $3.75 out per 1M tokens (through 2026-12-31) sits between the ~$0.60/$2.20 (≈92) and ~$1.25/$4.25 (≈88) reference points; standard pricing from 2027-01-01 ($1.50/$7.50) would push this toward the lower end of that range.
- **Overall Score: 88.8/100.** Mean of Tool use (80) + Reasoning (90) + Context window (96) + Multimodal (90) + Coding (88) = 444/5 = 88.8. Best fit: long-horizon agentic coding and multi-step enterprise reasoning workloads that benefit from a 1M-token context and multimodal (incl. audio/video) input at Flash-tier pricing, rather than pure tool-orchestration tasks where its agentic benchmarks trail its coding/reasoning scores.

---

## Signature

- Provided by: **Claude Sonnet 5 (anthropic/claude-sonnet-5)** — 2026-09-23
- Method: Public web research via live search and page fetches of Google's official blog post and developer documentation, Artificial Analysis's model-release page, and BenchmarkList/BenchLM aggregator pages; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
