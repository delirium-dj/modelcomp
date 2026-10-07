# Pareto 26.10 Preview — findings by Qwen 3.8 Flash

- Source: Unbiased AI / Circuit & Chisel (curated id `opencode/pareto-26.10-preview`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview (API slug `unbiased/pareto-26.10-preview`; vendor model identifier `pareto`)
- **Short description:** A **composite / blended** model: Unbiased runs several frontier and open models against the *same* request and returns one selected-or-synthesized answer, without switching models mid-conversation (which preserves prompt caching). Sold as near-frontier quality at a fraction of flagship cost. **Identity flag — this is not a fixed-weights model:** the vendor states the underlying model mix and behavior "may change as it is evaluated", so any score attached to this ID is a snapshot of a moving ensemble, and no single set of weights can be re-downloaded and checked.
- **Provider / access:** Unbiased platform (`platform.unbiased.ai`) plus `unbiased/pareto-26.10-preview` on OpenRouter, AIMLAPI, Puter.js and Comet-style aggregators. Explicit provider selection is **not** available — routing is automatic, so which member answers is not user-controllable. Chat Completions, tool calling supported.
- **Release / knowledge:** added to aggregators 2026-10-01 (preview); vendor homepage/model card published the same week. No knowledge cutoff disclosed — and for an ensemble it is not well-defined. Built by Circuit & Chisel, a remote-first US/Canada team.
- **IDs:** `unbiased/pareto-26.10-preview` (OpenRouter/aggregators), `pareto` (vendor); sibling `unbiased/pareto` (the earlier 26.9-era blend, 262 K context) — **neither sibling has a folder in this registry.**
- **Context window:** 1,048,576 input tokens; 131,072 max output — vendor model card, OpenRouter and two aggregators agree (this corrects the rounded "1,000,000 / 131,000" in this folder's curated `meta.json`).
- **Modalities:** text + image input; text output; tool calling yes; reasoning yes. **No** video/PDF/audio input and no image/audio output listed on any endpoint page I read.
- **Pricing (as of 2026-10-07):** $0.80 in / $3.20 out per 1M tokens, cached read $0.03 — matches `meta.json` exactly and OpenRouter's listing; OpenRouter's announcement contrasts it against "$2.50/$7.50 for the current" flagship comparison set. Consumer plan: $10/month, 25 M tokens/week, 20 requests/minute.
- **Data handling:** request content may be retained up to 30 days for abuse/security monitoring; vendor states it is not used for training without explicit consent.
- **Evidence quality (critical):** every task-quality number below is **vendor-run and self-published** ("preliminary results", unbiased.ai). BenchLM carries exactly 3 source-displayable rows for this ID, shows **no overall score, unranked**, and flags coverage as 3 of 623; NanoGPT and Artificial Analysis list **no** verified benchmark rows for this slug. I found no independent harness replication anywhere in this scan, so all dimensions carry a verification penalty.

### Raw benchmarks found

Vendor-preliminary only (source: Unbiased Pareto 26.10 Preview results, echoed by BenchLM and Puter Developer, updated 2026-10-01/10-07):

Agent / tool use:

- Terminal-Bench 4.0: **50.8 %** — the vendor's own comparison notes GPT 6 Astra (58) and Claude Fable 5.1 (56) score higher
- τ²/τ³-Banking, Toolathlon, GDPval-AA, Briefcase, AutomationBench, Claw-Eval: **no verified public score found for this ID**

Reasoning / knowledge:

- GPQA Diamond: **92.4 %** (vendor)
- Humanity's Last Exam: **49.9 %** (vendor, text-only setting)
- MMLU-Pro, CritPt, MRCR/LCR, AA Intelligence Index, Omniscience: **no verified public score found for this ID**

Coding:

- DeepSWE v1.1: **69.9 %** at **$0.24 per task** — the vendor places it level with Fable 5 (70.0 %) while citing Fable 5's $13.50 per task for the same benchmark
- SWE-bench Verified, LiveCodeBench, SciCode, SWE-Atlas, Vibe Code: **no verified public score found for this ID**

Multimodal:

- No measured vision rows for this ID. The sibling Pareto 26.9 result set (ArXivMath 88/100, MMMU-Pro 78/100, DeepSWE 74/100) is the only adjacent multimodal evidence, and I did **not** transfer those numbers onto this score line.

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 4.0 50.8 % is a genuinely respectable long-horizon agentic result (for calibration, near-frontier models in this registry sit at 32.8 % on the same harness) and function calling is supported on every endpoint, but it trails two named flagships on the only agentic row that exists, and there is no τ-benchmark, GDPval, Toolathlon or Claw-Eval evidence for the ID. Scored at the top of the methodology's mid band with an explicit verification penalty.
- **Reasoning: 86/100.** GPQA Diamond 92.4 % and HLE 49.9 % (text-only) both clear the frontier anchors (90 %+ / 40 %+), which is remarkable for a blend priced under $4/M output — but zero independent replication, no long-context reasoning row and no knowledge-calibration (Omniscience) data means the ceiling here is evidence, not performance.
- **Context window: 95/100.** 1,048,576 in / 131,072 out is corroborated by the vendor card, OpenRouter and two aggregators, placing it in the ≥1 M tier (95–100); it is not higher because no ≥98 % retrieval measurement at 512 K+ exists, and an ensemble's effective window is only as large as the member that gets selected.
- **Multimodal: 68/100.** Text + image input with tool calling is the methodology's "+image in" band (60–70), and it sits at the top of that band; no video/PDF/audio input, no non-text output, and — decisively — no measured vision benchmark for this ID.
- **Coding: 80/100.** DeepSWE v1.1 69.9 % is just under the 74 %+ frontier anchor and is the strongest cost-per-task datapoint in this registry, but with SWE-bench Verified, LiveCodeBench, SciCode and the Coding Index all missing for the ID, the methodology's "slight penalty, no hallucinated score" rule applies. The sibling's 74/100 DeepSWE suggests the family is coding-strong but is not this ID's evidence.
- **Cost efficiency: 91/100.** $0.80/$3.20 with $0.03 cached reads sits between the methodology's ~$0.60/$2.20 (≈92) and ~$1.25/$4.25 (≈88) anchors, and the $0.24-per-DeepSWE-task figure — against $13.50 for a peer at the same score — is the headline. Deductions: the blend multiplies backend compute per request (latency and effective cost are opaque to the caller), automatic-only routing removes the cheapest self-host path, and there are no open weights.
- **Overall Score: 81/100.** Mean of the five quality dimensions (76 + 86 + 95 + 68 + 80) / 5 = 81.0 → 81; Cost excluded per `RULES.md`. Best fit: cost-sensitive research/coding agents that need 1 M context and can tolerate a non-reproducible, blended backend. Treat it as an unstable preview: re-measure before relying on any single figure, and expect the numbers to move as Unbiased changes the mix.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-07
- Method: fresh public internet research (Unbiased model card + homepage, BenchLM `pareto-26-10-preview`, OpenRouter listing/announcement, NanoGPT model page, Puter Developer card, AIMLAPI docs, Cline community post); scores are normalized 1–100 interpretations, not official vendor scores. Vendor figures are self-published and unreplicated — flagged in-line.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
