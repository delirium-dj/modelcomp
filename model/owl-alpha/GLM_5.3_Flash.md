# Owl Alpha — findings by GLM 5.3 Flash

- Source: Meituan / LongCat (`owl-alpha` — stealth OpenRouter alias, later attributed to the LongCat-2.0 preview)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha (stealth codename; identity revealed as the LongCat-2.0 preview)
- **Short description:** A production-grade foundation model dropped anonymously on OpenRouter under a "Stealth" provider label in spring 2026, free during a preview window in exchange for usage/prompt logging. Became a top-routed agent model (#1 Hermes Agent, #2 Claude Code, #3 OpenClaw volumes); the LongCat team later confirmed it as the LongCat-2.0 preview (1.6T MoE, 1M context) and retired the Owl Alpha name.
- **Provider / access:** OpenRouter `openrouter/openrouter/owl-alpha` ("Stealth" label, OpenAI-compatible Chat Completions API); after the reveal, canonical routes moved to the LongCat API with first-party docs for Claude Code, Kilo Code, OpenCode, OpenClaw, and Codex.
- **Release / knowledge:** 2026-04-28 stealth listing (RoboRhythms); identity reveal and open-weights release June 2026; knowledge cutoff not stated.
- **IDs:** `openrouter/owl-alpha` (retired stealth route); post-reveal LongCat API IDs — no Free ID on OpenCode Zen verified.
- **Context window:** 1,048,576 total, 262,144 max output tokens (RoboRhythms pricing table; longcatai.org confirms 1M context) — verified against both sources.
- **Modalities:** text in, text out (no image/audio support mentioned in any source); reasoning yes (careful, long-horizon multi-step behavior reported); tool calls yes (0.39% structured-output / 4.73% tool-call error rates measured); JSON mode yes.
- **Pricing (as of 2026-10-09):** evaluated preview tier was $0 in / $0 out (time-limited; prompts and completions logged for model improvement — a data-use caveat that breaks privacy-sensitive workflows); post-reveal LongCat-2.0 pricing $0.75/$2.95 standard, $0.30/$1.20 promo per 1M.
- **Architecture:** 1.6T MoE (per the LongCat-2.0 reveal), trained end-to-end on domestic chips; stealth snapshot of the upcoming public release, weights since open-sourced under the LongCat-2.0 announcement.

### Raw benchmarks found

Agent / tool use:

- Structured-output error rate: **0.39%** (RoboRhythms independent review, 100% uptime)
- Tool-call error rate: **4.73%** (RoboRhythms independent review — compounds across multi-step chains, ~32% odds of ≥1 misfire in an 8-call chain)
- SWE-bench Pro: **59.5%** (LongCat team, disclosed at identity reveal)
- Hermes Agent routed volume: **#1** / Claude Code deployments: **#2** / International OpenClaw: **#3** (longcatai.org timeline, public reports and community analytics — usage rankings, not quality scores)
- Peak anonymous month: ~10.1 trillion tokens consumed, ~559B tokens/day, +242% MoM (longcatai.org timeline)
- GDPval / Tau2/Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / CritPt / LCR / Intelligence Index: no verified public score found — the only reasoning signals are behavioral (patient long-document handling, careful Claude-4-series-style prose per RoboRhythms) and the 1M-context capability claim

Coding:

- SWE-bench Pro: **59.5%** (LongCat team)
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE / Terminal-Bench: no verified public score found

Long context:

- 1,048,576-token window with real-world strong long-context document analysis (RoboRhythms: "Strong (1M context)" for long-doc analysis, whole-repo refactors, 600-page filings in one prompt); no MRCR/RULER retrieval score reported

Speed: ~12 tokens/s throughput, 4.91s latency (RoboRhythms) — the "speed tax" that disqualifies interactive use.

### Normalized scores (1–100)

- **Tool use: 63/100.** SWE-bench Pro 59.5% (agent harness) is a solid mid-band anchor and a 0.39% structured-output error rate is genuinely strong, but a 4.73% tool-call error rate compounds across chained flows and the #1/#2/#3 platform rankings measure routed volume, not quality.
- **Reasoning: 55/100.** No verified public reasoning benchmark (GPQA/HLE/Index) exists — scored provisionally on the careful long-horizon behavioral fingerprint and 1M-context claims; a frontier cloaked lineage is plausible but unproven by numbers.
- **Context window: 93/100.** 1,048,576 total with 262,144 max output and real-world confirmation that full filings fit in one prompt (top-tier band); 93 rather than 95–100 because no vendor-independent ≥98%-retrieval-at-512K+ measurement is published.
- **Multimodal: 15/100.** Text-only input and output — no image/audio/video support mentioned in any source.
- **Coding: 62/100.** SWE-bench Pro 59.5% sits in the 50–70 mid-band (below the DeepSWE 74%+ frontier reference); missing SWE-bench Verified, LiveCodeBench, and Terminal-Bench numbers cap the score.
- **Cost efficiency: 92/100.** The evaluated $0 preview tier would score 100 with a mandatory time-limited + prompt-logging caveat, but that window has closed (name retired); current LongCat-2.0 promo $0.30/$1.20 ≈ the ~$0.60/$2.20 ≈ 92 reference, standard $0.75/$2.95 ≈ 89. Paid baseline scored — not counted toward Overall.
- **Overall Score: 57.6/100.** Mean of the five quality dims (63 + 55 + 93 + 15 + 62) / 5 = 57.6 → 57. Best-fit recommendation: a patient batch/long-context workhorse, never an interactive or privacy-sensitive pick — historically notable as the stealth drop that became LongCat-2.0.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (longcatai.org identity timeline, RoboRhythms independent hands-on review, OpenRouter listing via DuckDuckGo search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
