# Gemini 3.8 Flash Cyber — findings by Laguna S 2.1

> Source: google/gemini-3-8-flash-cyber (Google DeepMind), e.g. Google DeepMind official Cyber page, AI Mastery (MarkTechPost), llm-stats, Artificial Analysis Gemini 3.8 Flash (high)
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber (Google DeepMind). Specialized cybersecurity variant of Gemini 3.8 Flash — Google's "most capable specialized cybersecurity model" for autonomous vulnerability discovery and automated patching.
- **Short description:** Same foundation weights as Gemini 3.8 Flash, but with a more permissive cyber safety envelope (the reason access is gated). Built for defenders: frontier-level vulnerability discovery, automated code patching, and recall on penetration-testing benchmarks at materially lower cost than frontier baselines.
- **Provider / access:** Google DeepMind. **Restricted: available to vetted trusted defenders only via the Fairwind Program** (case-by-case access granted, not purchased off a price sheet). Available through Google AI / DeepMind, Antigravity, Vertex AI for eligible government/critical-infrastructure/software-maintainer accounts. `noFreeId` — no Zen Free ID.
- **Release:** September 2, 2026 (released alongside Gemini 3.8 Flash; llm-stats + AI Mastery confirm; DeepMind official page).
- **IDs:** `google/gemini-3-8-flash-cyber`. Technical report: `deepmind.google/models/evals-methodology/gemini-3-8-flash-cyber/`.
- **Context window:** 1,048,576 input tokens; 65,536 max output tokens (AI Mastery: "Specifications carried over without modification: a 1,048,576-token context window, a maximum output of 65,536 tokens"; ≥1M tier; 65,536 output clears the 64K caveat).
- **Modalities:** text + image + audio + video input → text output (omni-modal in, per AI Mastery "multimodal input spanning text, image, audio, and video"); text-only output. Thinking levels LOW/MEDIUM/HIGH (default MEDIUM); MINIMAL no longer accepted.
- **Reasoning / tools:** Yes — "same weights, two safety envelopes" variant; tool/function calls and structured outputs via the standard Gemini/Fairwind API surface.
- **Safety envelope:** More permissive cyber mitigations than the generally-available 3.8 Flash — the explicit reason access is gated to the Fairwind Program for vetted defenders; designed so the same weights can do autonomous vulnerability research that the standard envelope would block.
- **Pricing:** **Not publicly listed** — access is granted, not purchased off a price sheet (AI Mastery: "Pricing: $0.75/$3.75 for 3.8 Flash ... Not publicly listed; access is granted"). Base model Gemini 3.8 Flash (high) = $0.75 / $3.75 per 1M in/out for reference; Cyber is cost-tiered by Fairwind arrangement.
- **Architecture:** Proprietary (closed weights; no self-hosted/on-premises path). Same foundation weights as Gemini 3.8 Flash.

### Raw benchmarks found

> Verified public numbers, sourced per metric (DeepMind official Cyber page; AI Mastery/MarkTechPost; llm-stats). This is a **domain-specialist** model — general Intelligence-Index-style benchmarks are not its focus; its public numbers are security-domain evaluations. Benchmarks not located are NOT fabricated.

Domain / security benchmarks:
- **CyberGym Pass@1: 86.2%** (autonomous vulnerability discovery) — "surpasses both 3.5 Flash Cyber and significantly larger frontier models" (DeepMind official Cyber page).
- **CWE-Bench Pass@1: 47.2%** (external, run by Collinear) — Pareto frontier: ~parity with Fable 5.1 (47.8%) at materially lower cost (DeepMind + AI Mastery).
- Internal real-world vulnerability-discovery benchmark (20 programming languages): **>70% success rate** (DeepMind).
- Real-world vulnerability discovery: found a critical foundational vulnerability in under two hours (Google Cloud Vulnerability Research); Chrome Security team reported **2.6× more correct patches** than the best larger commercial models (AI Mastery).
- Wiz internal penetration-testing benchmark: **7.5–9.7pp higher recall** over a leading frontier model at **2.3×–5.2× lower cost** (AI Mastery).
- Gray Swan prompt-injection robustness: "significant leap" vs 3.7 Flash (qualitative; DeepMind).

General / knowledge benchmarks (carried from the identical foundation):
- HLE-Verified: **54.9%** (3.8 Flash; AI Mastery — reported for the foundation, not Cyber specifically).
- DeepSWE v1.1: 3.8 Flash "outperforms most larger frontier models" at a fraction of the cost (relative win, absolute not given; AI Mastery).
- AA Intelligence Index v4.3.2: **41** (#40/212) is the **base** Gemini 3.8 Flash (high) figure — NOT Cyber-specific; Cyber is a restricted security specialist with no published general Intelligence Index. Cited only for the shared foundation.
- Vals Finance Agent V2 / Harvey Legal Agent Benchmark: relative improvements vs 3.7 Flash (absolute scores not published; AI Mastery).

Long context / retrieval:
- 1M window verified (DeepMind + AI Mastery); no MRCR / RULER / retrieval-at-512K percentage published for Cyber.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. This is a **domain-specialist (cybersecurity) model** — scores weight its published security-domain results (CyberGym, CWE-Bench, 20-lang recall, patching, Wiz recall-vs-cost) rather than the base Index 41, which is not Cyber-specific.

- **Tool use: 70/100.** CyberGym Pass@1 86.2% (frontier-level autonomous vuln discovery) + CWE-Bench 47.2% (Pareto parity with Fable 5.1 at lower cost) + 2.6× more patches / Wiz 7.5–9.7pp recall. Capped by no general Terminal-Bench / GDPval-AA / Tau3 figures for the Cyber ID specifically.
- **Reasoning: 62/100.** HLE-Verified 54.9% (carried from the shared foundation) + internal 20-language >70%; capped because reasoning is security-task-bound and no Cyber-specific GPQA/HLE/Intelligence-Index is published.
- **Context window: 92/100.** 1,048,576 native input + 65,536 max output (both verified, ≥1M tier, 65,536 output clears the 64K caveat). No measured retrieval-acuity figure (no MRCR/RULER).
- **Multimodal: 78/100.** Text + image + audio + video input, text-only output (omni-modal in, +image +speech +video-in) — carries the base 3.8 Flash modality; capped by text-only output.
- **Coding: 82/100.** DeepSWE "outperforms most larger frontier models" + CWE-Bench 47.2% patching + 2.6× more correct patches (Chrome Security) — excellent in-domain code-fix generation; capped by no flagship SWE-bench Verified / LiveCodeBench % published for the Cyber ID.
- **Cost efficiency: 60/100.** Fairwind Program is **access-granted, not pay-as-you-go** and no public per-token pricing is listed; base 3.8 Flash is cheap ($0.75/$3.75) and Wiz measured 2.3×–5.2× lower cost than frontier, but the lack of a public price sheet + gated access make a per-token cost score unreliable → mid band. Not 100 (not free to the public; noFreeId).
- **Overall Score: 77/100.** (70 + 62 + 92 + 78 + 82) / 5 = 384 / 5 = 76.8 → 77.

> **Scale note / discrepancy:** The repo AI-Rankings average for this model is **75.8** (audit/model-comparison.md v4, 2026-09-17). My score (77) is consistent with the repo's, because Gemini 3.8 Flash Cyber is a **domain specialist** whose public numbers are security benchmarks (CyberGym 86.2%, CWE-Bench 47.2%) rather than the general AA Intelligence Index 41 of its base model — so the legacy at-launch rating and the current-domain-score interpretation converge here (unlike Fable 5.1 / GPT-5.4 / Gemini 2.5 Pro where the deprecation gap was large). Both approaches preserved.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Google DeepMind Gemini 3.8 Flash Cyber official page; AI Mastery/MarkTechPost "Same Weights, Two Safety Envelopes" analysis; llm-stats detail page; Artificial Analysis Gemini 3.8 Flash (high) for the shared-foundation Index 41). Scores are normalized 1–100 interpretations of the published security-domain benchmarks, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.