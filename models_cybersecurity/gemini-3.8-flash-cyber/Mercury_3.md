# Gemini 3.8 Flash Cyber — findings by Mercury 3

- Source: Google/Gemini 3.8 Flash Cyber
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's most capable cybersecurity model (released 2026-09-02), sharing the Gemini 3.8 Flash foundational core but tuned for defensive cyber work. Frontier-level autonomous vulnerability discovery and automated patching at Flash speed/cost; available **only to trusted defenders via the Fairwind Program** (gated access).
- **Provider / access:** Restricted — Fairwind Program (trusted government authorities, critical-infrastructure operators, software maintainers). Not a general public API SKU.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff not published.
- **IDs:** `gemini-3.8-flash-cyber` (Gemini API route within Fairwind).
- **Context window:** 1,000,000 tokens (1M) total (family spec; not independently re-verified for Cyber).
- **Modalities:** text + image + speech + video input, text output; reasoning (extended thinking); tool calls; permissive cyber mitigations (CBRN/cyber-offense safeguards reduced for vetted defenders).
- **Pricing (as of 2026-11-03):** $0.75 input / $3.75 output per 1M tokens introductory through 2026-12-31, then $1.50/$7.50 (same schedule as 3.8 Flash).
- **Architecture:** proprietary; same foundational core as Gemini 3.8 Flash; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use (cyber-focused):

- CyberGym (pass@1): **86.2%** (Google blog — surpasses 3.5 Flash Cyber and significantly larger frontier models)
- CWE-Bench (Collinear, pass@1): **47.2%** vs a leading frontier model at 47.8% — on the Pareto frontier at much lower cost
- Internal 20-language vulnerability-discovery benchmark: **>70% success** (Google)
- Chrome Security: **2.6× more correct patches** than much larger best commercial models; Wiz: +7.5–9.7pp recall at 2.3–5.2× lower cost (Google-commissioned partner evals)
- Gray Swan IPI (15 attempts): **6.0%** (prompt-injection robustness leap, per blog)

Reasoning / knowledge (shared core, 3.8 Flash):

- HLE-Verified: **54.9%** (3.8 Flash card via blog)
- No GPQA/ARC-AGI figure verified in sources reviewed for the Cyber variant specifically

Coding:

- Vulnerabilities patching (CWE-Bench) 47.2% (above); no general SWE/DeepSWE figure verified for Cyber specifically (DeepSWE 73.8% is the 3.8 Flash figure — shared core, not Cyber-reported).

Long context / Multimodal:

- 1M window (family spec); text/image/speech/video in, text out; no verified long-context/video benchmark rows found for Cyber.

### Normalized scores (1–100)

- **Tool use: 90/100.** CyberGym 86.2% and CWE-Bench 47.2% (Pareto-frontier) are top-class defensive-agent numbers; capped by the narrow public benchmark surface and gated (non-general) deployment.
- **Reasoning: 84/100.** Shared 3.8 core (HLE-Verified 54.9%, GPQA ~95% on the base model); no Cyber-specific reasoning rows published.
- **Context window: 90/100.** 1M family spec with no Cyber-verified retrieval figure.
- **Multimodal: 91/100.** Same omni input as 3.8 Flash (text/image/speech/video); text-only output.
- **Coding: 88/100.** Vulnerability patching (CWE-Bench 47.2%) and Chrome 2.6× patch-rate evidence; capped by no general SWE figures for the Cyber variant.
- **Cost efficiency: 92/100.** Same $0.75/$3.75 intro as 3.8 Flash with frontier-level cyber results — exceptional cost/performance for defenders.
- **Overall Score: 89/100.** Mean of (90+84+90+91+88)/5 = 88.6 → 89. A specialist defensive-cyber model; choose it for vuln discovery/patching workloads (Fairwind access required), not general use.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Google Gemini 3.8 Flash/Cyber announcement, BenchLM aggregation, Collinear CWE-bench); scores are normalized 1–100 interpretations, not official vendor scores. Cyber variant shares the 3.8 Flash core; general reasoning/coding numbers are from the base model and flagged as shared-core evidence.
- Reference URLs:
  - [Introducing Gemini 3.8 Flash and 3.8 Flash Cyber (Google, 2026-09-02)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
  - [Fairwind Program (Google DeepMind)](https://deepmind.google/fairwind-program/)
  - [Gemini 3.8 Flash Cyber — BenchLM benchmark aggregation](https://benchlm.ai/models/gemini-3-8-flash-cyber)
  - [CWE-Bench leaderboard (Collinear)](https://cwe-bench.com/#leaderboard)
