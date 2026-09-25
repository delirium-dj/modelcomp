# Gemini 3.8 Flash Cyber — findings by Kimi K3

- Source: Google / Gemini 3.8 Flash Cyber (`gemini-3.8-flash-cyber`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Security-specialized sibling of Gemini 3.8 Flash (same launch, September 2, 2026) tuned for vulnerability research, patching, and defensive security workflows; sits on the CWE-Bench Pareto frontier per Google's launch post.
- **Provider / access:** Google Gemini API (`gemini-3.8-flash-cyber`), AI Studio.
- **Release / knowledge:** Released 2026-09-02 alongside 3.8 Flash (blog.google launch post); knowledge cutoff ~March 2026 (family).
- **IDs:** `google/gemini-3.8-flash-cyber` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (family spec, benchlm.ai lists the 3.8 Flash family at 1M; marked provisional for this variant).
- **Modalities:** text/image in (family); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** family pricing $0.75/M in / $3.75/M out (provisional — variant-specific sheet not verified).
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- CWE-Bench (Collinear, vulnerability patching): **47.2%** pass@1 — vs "a leading frontier model at 47.8%", at significantly lower cost; on the Pareto frontier (blog.google launch post)
- Terminal-Bench / Tau3 / GDPval / Claw for this exact variant: no verified public score found

Reasoning / knowledge:

- All rows: no verified public score found for this exact variant (3.8 Flash base: AA Intelligence Index 40.9, GPQA-D 95.3%, HLE-Verified 54.9% — provisional proxies from the shared base weights)

Coding:

- CWE-Bench 47.2% (verified above)
- Other coding rows for this exact variant: no verified public score found (3.8 Flash base: DeepSWE 73.8%, SWE-bench Vals 80% — provisional proxies)

Long context:

- No variant-specific retrieval measurement found (family 1M window; 3.8 Flash base AA-LCR 81.3% provisional).

Multimodal:

- No variant-specific rows found; family image/audio/video/PDF input (provisional).

### Normalized scores (1–100)

- **Tool use: 80/100.** CWE-Bench 47.2% (near-frontier patching) verified; capped because only one variant-specific agentic row exists, rest provisional proxies from base.
- **Reasoning: 78/100.** Provisional: base 3.8 Flash is strong (GPQA 95.3%, HLE-V 54.9%); cyber tuning typically shifts general reasoning slightly. Capped by absence of independent rows.
- **Context window: 86/100.** Family 1M window; capped by zero variant-specific retrieval evidence.
- **Multimodal: 80/100.** Family input breadth; no variant-specific vision rows; text-only output.
- **Coding: 82/100.** CWE-Bench 47.2% pass@1 is elite patching evidence; broad coding figures provisional from base (DeepSWE 73.8%).
- **Cost efficiency: 80/100.** Family Flash pricing ($0.75/$3.75, provisional) — exceptional for security-tuned capability at that cost point.
- **Overall Score: 81/100.** Mean of the five quality dims (80+78+86+80+82)/5 = 81.2 → 81. Best fit: defensive security / vuln-patching pipelines where CWE-Bench Pareto position and Flash pricing align.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (blog.google launch post incl. CWE-Bench figure, benchlm.ai family scorecard for explicitly-marked provisional proxies); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
