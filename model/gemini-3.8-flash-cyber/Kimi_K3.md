# Gemini 3.8 Flash Cyber — findings by Kimi K3

- Source: Google / Gemini 3.8 Flash Cyber (`gemini-3.8-flash-cyber`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Security-specialized sibling of Gemini 3.8 Flash (same launch, September 2, 2026), tuned for autonomous vulnerability discovery (20 programming languages) and automated patching; "our most capable cybersecurity model" (deepmind.google/models/gemini/cyber). Successor to Gemini 3.5 Flash Cyber, which it surpasses on CyberGym.
- **Provider / access:** Google **Fairwind Program** only — restricted access for vetted trusted defenders; NOT on the public Gemini API or AI Studio (deepmind.google cyber page, verified this pass; corrects my 2026-09-24 note).
- **Release / knowledge:** Released 2026-09-02 alongside 3.8 Flash (blog.google launch post); knowledge cutoff ~March 2026 (family).
- **IDs:** `google/gemini-3-8-flash-cyber` (Fairwind REST API; restricted — no Free-tier or Zen ID exists).
- **Context window:** 1M tokens (family spec, benchlm.ai lists the 3.8 Flash family at 1M; marked provisional for this variant).
- **Modalities:** text/image in (family); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** no public price — Fairwind Program distribution; family list pricing is $0.75/$3.75 intro ($1.50/$7.50 regular from 2027) (deepmind.google footnote; provisional for this variant).
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- CyberGym Pass@1 (industry vuln-discovery benchmark): frontier-level, surpasses **3.5 Flash Cyber** and significantly larger frontier models — no exact number published (deepmind.google cyber page)
- Internal vulnerability-discovery benchmark: **>70%** success rate across complex codebases spanning 20 programming languages (deepmind.google)
- Gray Swan indirect-prompt-injection (IPI): significant robustness leap for Gemini 3.8 models (deepmind.google; no numeric score)
- Terminal-Bench / Tau3 / GDPval / Claw for this exact variant: no verified public score found

Reasoning / knowledge:

- All rows: no verified public score found for this exact variant (3.8 Flash base: HLE-Verified 54.9%, GPQA-D 95.3%, AA Intelligence Index 40.9 — provisional proxies from the shared base weights)

Coding:

- CWE-Bench (Collinear, vulnerability patching): **47.2%** pass@1 vs **Fable 5 at 47.8%**, at significantly lower cost — on the Pareto frontier (deepmind.google cyber page; "Fable 5" is now the named comparator, previously "a leading frontier model")
- Other coding rows for this exact variant: no verified public score found (3.8 Flash base: DeepSWE 73.7%, SWE-bench Vals 80% — provisional proxies)

Long context:

- No variant-specific retrieval measurement found (family 1M window; 3.8 Flash base AA-LCR 81.3% provisional).

Multimodal:

- No variant-specific rows found; family image/audio/video/PDF input (provisional).

### Normalized scores (1–100)

- **Tool use: 80/100.** CyberGym frontier-level placement + CWE-Bench 47.2% (near-frontier patching) verified; capped because variant-specific agentic rows are scarce, rest provisional proxies from base.
- **Reasoning: 78/100.** Provisional: base 3.8 Flash is strong (HLE-V 54.9%, GPQA 95.3%); cyber tuning typically shifts general reasoning slightly. Capped well below the ≥40% HLE 90s band by absence of any variant-specific row.
- **Context window: 86/100.** Family 1M window; capped below the 95–100 band by zero variant-specific retrieval evidence.
- **Multimodal: 80/100.** Family input breadth; no variant-specific vision rows; text-only output.
- **Coding: 82/100.** CWE-Bench 47.2% pass@1 is elite patching evidence vs Fable 5 (47.8%); broad coding figures provisional from base (DeepSWE 73.7%).
- **Cost efficiency: 78/100.** No public price (Fairwind); scored on family regular rate $1.50/$7.50 → 75–80 band — exceptional for security-tuned capability at that cost point.
- **Overall Score: 81/100.** Mean of (80+78+86+80+82)/5 = 81.2 → 81. Best fit: defensive security / vuln-patching pipelines where CWE-Bench Pareto position and Flash-tier cost align.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (deepmind.google/models/gemini/cyber page, deepmind.google family performance table incl. pricing footnote, benchlm.ai family scorecard for explicitly-marked provisional proxies); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: corrected access to Fairwind Program (restricted; not public API/AI Studio); named the CWE-Bench comparator (Fable 5, 47.8%); added CyberGym, >70% internal vuln-discovery and Gray Swan IPI rows; Cost moved to the $1.50/$7.50 family band.
- Future sources: add a new file next to this one using the same headings.
