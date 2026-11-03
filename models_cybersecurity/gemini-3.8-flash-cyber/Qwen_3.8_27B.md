# Gemini 3.8 Flash Cyber — Evaluation Report

**Model:** Gemini 3.8 Flash Cyber (`google/gemini-3-8-flash-cyber`)
**Auditor:** Qwen 3.8 27B (qwen/qwen3.8-27b)
**Date:** 2026-09-28

## Model card

**Name:** Gemini 3.8 Flash Cyber
**Short:** Google DeepMind's cybersecurity fine-tune of Gemini 3.8 Flash for finding, validating and patching vulnerabilities, available via the Fairwind Program.
**Provider:** Google / Google DeepMind — restricted distribution: available only to trusted defenders (government agencies, critical-infrastructure operators, software maintainers) via the Fairwind Program. No public API key.
**Release date:** 2026-09-02 (blog.google launch post; forkast.news coverage).
**Architecture:** Fork of Gemini 3.8 Flash ("driven by the same foundational intelligence"), with extended RL in the cybersecurity domain and a more permissive cyber configuration.
**Context window:** 1,048,576 (1M) tokens in / 65K out (repo meta.json; consistent with the 3.8 Flash family's 1M claims).
**Modalities:** Text + code in; text + code out (security patches). No image/audio input evidence.
**Pricing:** No public pricing (Fairwind-only). Base Gemini 3.8 Flash launched at introductory $0.75/$3.75 per 1M (through 2026-12-31; $1.50/$7.50 after); CWE-Bench cost-per-rollout for the Cyber variant ~$3.60.

### Raw benchmarks found

**Domain (cybersecurity) — official (deepmind.google/models/gemini/cyber, 2026-09-02):**
- CyberGym Pass@1: **86.2%** — leads GPT-5.5-Cyber 85.6%, Mythos 5 83.8%, GPT-5.6 Sol 83.6%, Gemini 3.5 Flash Cyber 77.5%.
- Internal real-world vulnerability discovery (across 20 languages): **71.0%** Pass@1 (Gemini 3.7 Flash 58.9%, 3.5 Flash Cyber 46.6%).
- CWE-Bench Pass@1 (patch correctness): **47.2%** at **~$3.60/rollout** — Pareto frontier; Fable 5 47.8% at higher cost.
- Gray Swan IPI (prompt-injection robustness): attack success rate **6.0%** — among the most robust.

**Real-world deployments (vendor-announced):**
- Chrome Security: **2.6× more correct patches** than the best (much larger) commercial models on internal CVE evaluation.
- Wiz: **+7.5–9.7% higher recall** on internal pentest benchmarks at **2.3–5.2× lower cost** than leading frontier models.
- Cloud Vulnerability Research: found a critical foundational vulnerability in under 2 hours.

**Shared-core signals (Gemini 3.8 Flash, same foundation; blog.google 2026-09-02):**
- HLE-Verified **54.9%**; "most powerful reasoning and coding model to date"; outperforms most larger frontier models on DeepSWE v1.1; leads on Vals Finance Agent V2 and Harvey Legal Agent Benchmark (chart-only, no exact numbers published in the text).

**Gaps:** No public SWE-bench Verified / LiveCodeBench / Tau3 / TB2.1 / GPQA numbers for the Cyber variant itself; no public pricing; no retrieval measurement; context spec taken from repo meta (not independently confirmed on a public benchmark page).

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong agentic loop over complex multi-language codebases (official: "long-running agentic loop"), leading CyberGym Pass@1 among the models shown (86.2% > GPT-5.5-Cyber 85.6%, GPT-5.6 Sol 83.6%), and top-tier injection robustness (6.0% IPI success). Capped at 78 because general-purpose tool-use benchmarks (Tau3, GDPval, claw-evals) are not published for this variant — evidence is domain-agentic, not general.
- **Reasoning: 84/100.** HLE-Verified 54.9% on the shared 3.8 Flash core (top of the 2026 band: above Fable 5 53.3, GPT-5.6 Sol 47.2, Qwen3.8-Max 43.6) plus rigorous domain RL. No GPQA/AIME published for the variant; HLE figure is inherited from the core, not re-measured here.
- **Context window: 88/100.** 1,048,576-token (1M) input per repo meta, in the 85–94 band for the 1M tier. No retrieval/synthesis measurement at full context published; score reflects capacity, not demonstrated long-context quality.
- **Multimodal: 15/100.** Text and code in/out only — no image, video, or audio input support in any public material (repo meta: "Text, code in; text, code out"). At the text-only floor of the rubric.
- **Coding: 80/100.** CWE-Bench 47.2% is level with Fable 5's 47.8% at far lower cost; internal 71.0% vuln discovery; 2.6× more correct Chrome CVE patches than the best large commercial model; shared core beats most larger frontier models on DeepSWE v1.1. Capped below the 85+ frontier because no general SWE-bench Verified / LiveCodeBench numbers exist for the variant — the evidence is security-patching, not general SWE.
- **Cost efficiency: 88/100.** No public pricing (Fairwind-only), but the variant is explicitly positioned at "Flash speed and cost": CWE-Bench cost-per-rollout ~$3.60 and 2.3–5.2× lower cost than leading frontier at equal-or-better recall (Wiz). Anchored to the base Flash tier ($0.75/$3.75 introductory) in the ~85–90 band; not 100 (restricted, not a public $0-tier offering).
- **Overall Score: 69/100.** Half-up mean of (78 + 84 + 88 + 15 + 80) / 5 = 69.0.

### Why not higher
Multimodal (15) is the drag: a security-patch-only I/O model scores at the text-only floor, and there is zero published evidence of image/audio input for this variant. Every other dimension is strong but bounded: domain-leading security numbers (CyberGym 86.2%, CWE-Bench parity with Fable 5) do not transfer 1:1 to the general SWE-bench / LiveCodeBench / Tau3 evidence that the generalist cohort's averages are built on. A generalist with the same Cyber numbers plus SWE-bench ~75% and real image input would land well above 75.

## Signature

Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
