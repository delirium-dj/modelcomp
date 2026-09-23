# Gemini 3 Flash — findings by Big Pickle

- Source: Google DeepMind (`opencode/gemini-3-flash`, Zen-served, text-only/128K tier)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google DeepMind's December 2025 speed tier — frontier PhD-level reasoning (GPQA Diamond 90.4%) and state-of-the-art coding (SWE-bench Verified 78%, beating Gemini 3 Pro) at Flash latency and pricing; top use case is high-frequency agentic coding and cost-sensitive multimodal pipelines.
- **Provider / access:** OpenCode Zen `opencode/gemini-3-flash`, Chat Completions-style. Native Google Gemini API / Vertex AI also serve it with 1M context. Site card caps the Zen entry at 128K total for text in/out only.
- **Release / knowledge:** 2025-12-17 (GA blog launch; public preview later). Knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gemini-3-flash` (no Zen Free ID seen; scored on paid pricing). Google API IDs: `gemini-3-flash` / `gemini-3-flash-v0`-style suffixed variants.
- **Context window:** Native up to 1M total (256K common serving default); Zen entry caps at 128K total per curated meta. No verified public long-context retrieval score found for this ID.
- **Modalities:** Native: image, audio, video, PDF + text in; text out; reasoning (thinking) yes; tool calls yes; JSON/structured output yes. Zen `opencode/gemini-3-flash` tier serves text in/out only.
- **Pricing (as of 2026-09-23):** ~$0.50 in / $3.00 out per 1M (verdictpal listing; Google list pricing, some trackers show ~$0.30/$2.50). No free Zen tier → cost scored on paid.
- **Architecture:** proprietary (non-open-weights), Google DeepMind; parameters/active-count not disclosed; optimized inference variant of the Gemini 3 family.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- SWE-bench Pro (agentic, hardest tier): **34.63%** resolve (official, evals.report, 2025-12-17) — strong proxy for agentic execution
- LiveCodeBench Pro: **2316** Codeforces-style Elo (official, evals.report, 2025-12-17)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (official Google launch blog, 2025-12-17; also #4/74 on CodeSOTA)
- HLE: **33.7%** without tools (official, Google launch blog); **43.5%** version reported by Benchgen (2025-12)
- MMLU: **89.6%** (CodeSOTA, 2026-01-01)
- MATH: **97.5%**; GSM8K: **96.8%**; SimpleQA: **68.7%** (Benchgen, 2025-12)
- Artificial Analysis Intelligence Index: no verified public score found; Vals/verdictpal Index **49.31 (#9)** (verdictpal)
- CritPt / Omniscience: **no verified public score found**
- MMMU Pro: **81.2%** (official, Google launch blog) — multimodal understanding (native API)

Coding:

- SWE-bench Verified: **78%** (official, Google launch blog; #8/39-#9/81 on CodeSOTA/swebench trackers; outperforms Gemini 3 Pro)
- SWE-bench Multilingual: **72.7%** (official, evals.report, 2025-12-17)
- LiveCodeBench (pass@1): **90.8%** (#2/30, CodeSOTA, 2026-03-15); evals.report lists an unverified **79.7%** — harness/snapshot disagreement, both recorded
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks retrieval score published for Gemini 3 Flash as of 2026-09-23 ("no long-context retrieval reported"). Native 1M window claimed; Zen tier serves 128K.

### Normalized scores (1–100)

- **Tool use: 72/100.** No public Terminal-Bench 2.1 / Tau3 / GDPval to score directly; the strongest available evidence is agentic — SWE-bench Pro 34.6% (top-tier hard agentic) and LiveCodeBench Pro 2316 Elo. **Capped by missing terminal/tool-call benchmark rows; penalized slightly for the N/A rows.**
- **Reasoning: 88/100.** GPQA Diamond 90.4% is genuinely frontier (PhD-level), and HLE 33.7% (without tools) sits just under the 40%+ frontier anchor; MATH 97.5%, SimpleQA 68.7% corroborate. **Capped by HLE < 40%.**
- **Context window: 56/100.** Zen serves 128K total → 100K–200K band (50–64); native 1M is claimed but not served here and no MRCR/RULER retrieval is published for this ID. **Capped by served 128K cap and absent retrieval numbers** (a verified 128K retrieval score would lift it toward 62).
- **Multimodal: 15/100.** The `opencode/gemini-3-flash` tier serves text in/out only; native Gemini 3 Flash (official API/Vertex) is multimodal (image/audio/video/PDF in, text out). **Scored on the served text-only tier per platform convention.**
- **Coding: 90/100.** SWE-bench Verified 78% (official) — beats Gemini 3 Pro and matches premium-handler scores; SWE-bench Multilingual 72.7%; LiveCodeBench pass@1 90.8% (#2/30) with a 2316 LCB-Pro Elo. **Capped by no verified SciCode/DeepSWE/Vibe rows (65–75 anchor applies to mid models, not this evidence set).**
- **Cost efficiency: 91/100.** ~$0.50 in / $3.00 out per 1M → cheaper input than the ~$0.60/$2.20 = 92 anchor but slightly pricier output; no free tier. **Near-flash frontier value at Flash-class price.**
- **Overall Score: 64/100.** (72 + 88 + 56 + 15 + 90) / 5 = 64.2 → **64**. Best-fit: excellent agentic coder and PhD-level reasoner in a flash tier; take it for SWE/agent pipelines rather than vision jobs (multimodal and long-context retrieval drag the Overall).

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-23
- Method: public internet research (Google launch blog, evals.report, CodeSOTA, Benchgen, verdictpal); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.