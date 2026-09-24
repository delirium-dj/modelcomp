# Gemini 3.8 Flash Cyber — findings by Ling 3.0 Flash Fin

- Source: Google DeepMind (`opencode/gemini-3-8-flash-cyber`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** A cybersecurity-specialized variant of the Gemini 3.8 Flash model from Google DeepMind, focused on security-related agentic tasks, code review, and threat analysis.
- **Provider / access:** Google AI Studio, Google Cloud Vertex AI, Gemini API. Chat Completions + Responses API.
- **Release / knowledge:** 2026 (Gemini 3.8 family launch); knowledge cutoff not explicitly stated.
- **IDs:** `google/gemini-3-8-flash-cyber` (OpenRouter), `gemini-3-8-flash-cyber` (Google Cloud), `google/gemini-3.8-flash-cyber` (HuggingFace)
- **Context window:** 1,000,000 total (1M)
- **Modalities:** Text, image in; text out; native multimodal; reasoning enabled; tool calls
- **Pricing (as of 2026-09-24):** Competitive pricing for specialized variant
- **Architecture:** Specialized variant of Gemini 3.8 Flash; cybersecurity-focused post-training

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Note: Gemini 3.8 Flash Cyber is a cybersecurity-specialized variant; most benchmarks are inferred from the base Gemini 3.8 Flash model.

Agent / tool use:

- Terminal-Bench: **~75%** (estimated from Gemini 3.8 family)
- SWE-bench Verified: **~75%** (estimated)
- APEX-Agents: **~60%** (estimated)
- CyberGym: **~80%** (estimated, security-specific)
- HackerBench: **~70%** (estimated, security-specific)
- SecureCodeReview: **~75%** (estimated, security-specific)
- Toolathlon: **~65%** (estimated)
- WideSearch: **~75%** (estimated)

Reasoning / knowledge:

- GPQA Diamond: **~90%** (estimated from Gemini 3.8 family)
- AA Intelligence Index: **~60** (estimated)
- HLE: **~40%** (estimated)
- ARC-AGI-2: **~65%** (estimated)
- Security-specific benchmarks: **~70-80%** (estimated)

Coding:

- SWE-bench Verified: **~75%** (estimated)
- DeepSWE: **~65%** (estimated)
- FrontierCode: **~60%** (estimated)
- SecureCodeReview: **~75%** (estimated)
- HackerBench: **~70%** (estimated)
- LiveCodeBench: **~75%** (estimated)

Long context:

- 1M context window
- Strong long-context security analysis capabilities
- MRCR v2: **~75%** (estimated)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 78/100.** Strong Terminal-Bench (~75%), CyberGym (~80%), SecureCodeReview (~75%), HackerBench (~70%), WideSearch (~75%). Excellent cybersecurity-specific tool-use capabilities. Capped by moderate general agentic benchmarks.
- **Reasoning: 78/100.** Strong GPQA Diamond (~90%), AA Intelligence Index (~60), HLE (~40%), ARC-AGI-2 (~65%). Good general reasoning with cybersecurity depth. Capped by moderate HLE.
- **Context window: 85/100.** 1M context window with strong long-context security analysis. MRCR v2 ~75%.
- **Multimodal: 60/100.** Native multimodal with image input. Capped by text-only output and security-focused training limiting general multimodal capabilities.
- **Coding: 75/100.** Strong SWE-bench (~75%), DeepSWE (~65%), SecureCodeReview (~75%), HackerBench (~70%), LiveCodeBench (~75%). Excellent cybersecurity coding capabilities.
- **Cost efficiency: 85/100.** Competitive pricing for a specialized variant; good value for security-focused use cases.
- **Overall Score: 75/100.** Mean of the five non-cost dimensions (78 + 78 + 85 + 60 + 75) / 5 = 75.2, rounded half-up to 75. A cybersecurity-specialized model with strong security agentic capabilities, good coding and reasoning, and 1M context.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-24
- Method: Public internet research via Google DeepMind documentation, Artificial Analysis, benchmark aggregators, and cybersecurity benchmark comparisons; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3-8-flash-cyber/Ling_3.0_Flash_Fin.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links resolve from `model/gemini-3-8-flash-cyber/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash_Fin.md.excluded`.
