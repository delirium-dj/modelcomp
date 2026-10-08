# Gemini 3.8 Flash Cyber — findings by Big Pickle

- Source: Google (`gemini-3.8-flash-cyber`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's cybersecurity-specialized twin of Gemini 3.8 Flash, tuned for autonomous vulnerability discovery and automated patching; posts frontier-level CyberGym / CWE-Bench results but is gated to vetted defenders through the Fairwind Program.
- **Provider / access:** Google DeepMind — Fairwind Program (trusted government authorities, critical-infrastructure operators, software maintainers; ~650 orgs); NOT generally available via the public Gemini API.
- **Release / knowledge:** 2026-09-02 (alongside standard Gemini 3.8 Flash; Google blog / DeepMind).
- **IDs:** not publicly listed on the rate card (`gemini-3.8-flash-cyber` per coverage; proprietary, no open weights)
- **Context window:** 1M shared with standard 3.8 Flash (1,048,576 input; 65,536 output); Google publishes no separate Cyber spec.
- **Modalities:** text, image, audio, video input; text output (shared 3.8 Flash footprint); tuned for code/security workloads.
- **Pricing (as of 2026-09-20):** no public price — access negotiated case-by-case through Fairwind (byteiota, shattered.io); standard 3.8 Flash lists $0.75/$3.75 intro through Dec 31, 2026.
- **Architecture:** Shares the Gemini 3.8 Flash foundation (proprietary, undisclosed); "the difference is not capability but policy" — a deliberately more permissive cyber-safety envelope.

### Raw benchmarks found

Agent / tool use (cybersecurity):

- CyberGym (autonomous vulnerability discovery, pass@1): **86.2%** (Google; vs 3.5 Flash Cyber 77.5%, GPT-5.5 Cyber 85.6%, unrestricted Mythos 5 83.8%, GPT-5.6 Sol 83.6%)
- Internal 20-language vulnerability-discovery benchmark: **>70% success** (Google; vs 58.9% for 3.7 Flash, 46.6% for 3.5 Flash Cyber)
- CWE-Bench (Collinear, external patching, pass@1): **47.2%** (vs a leading frontier model's 47.8% at roughly 3× the cost per rollout)
- Chrome Security: **2.6× more correct patches** than the larger commercial models tested; Wiz: **+7.5–9.7 pp recall** on its internal pentest benchmark at 2.3–5.2× lower cost.

Shared core (standard Gemini 3.8 Flash — not re-run separately for the Cyber variant):

- Terminal-Bench 2.1: **89.4%** (deepmind.google model card; leader of that table)
- DeepSWE v1.1: **73.7%** (vs 65.3% 3.7 Flash and 74.0% Claude Opus 5)
- HLE-Verified: **54.9%**; Artificial Analysis Intelligence Index: **59** (ties GPT-5.6 Sol and Grok 4.6)
- Vals Finance Agent v2: **61.4%**; OSWorld-2.0: **59.0%**

Reasoning / knowledge:

- GPQA Diamond for the Cyber variant itself: **no verified public score found** (not published for the Cyber model).

Long context:

- Cyber-specific MRCR / retrieval: **no verified public score found**; 1M window per the shared architecture.

Multimodal:

- Shared text/image/audio/video input (byteiota); Cyber-specific multimodal scores: **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 75/100.** CyberGym 86.2% pass@1 is elite autonomous agentic security work and the shared core posts Terminal-Bench 2.1 89.4%; but the Cyber variant itself has no general agentic eval and access is gated.
- **Reasoning: 79/100.** Core HLE-Verified 54.9% and AA Index 59 (tying Sol/Grok) are strong; specialist focus over generalist breadth keeps it below a pure reasoning flagship.
- **Context window: 88/100.** Full 1M shared window with 65K output; no Cyber-specific retrieval validation published.
- **Multimodal: 82/100.** Text/image/audio/video input per the shared architecture, though it is peripheral to the security mission.
- **Coding: 73/100.** CWE-Bench 47.2% pass@1 patching is frontier-adjacent and shared-core DeepSWE 73.7%, but no SWE-bench Verified is published for this variant.
- **Cost efficiency: 75/100.** No public price — fairwind access is case-by-case, so value holds only if the Flash-family economics ($0.75/$3.75 band) really apply.
- **Overall Score: 79/100.** Mean of the five quality dims (75+79+88+82+73)/5 = 79.4 → 79 (unchanged). A gated, specialist defender: elite at finding and fixing vulnerabilities at Flash-tier economics, unproven off its home turf.

---

## Re-verification — 2026-10-08 (18 days after original)

| Dimension | 2026-09-20 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 75 | 75 | — |
| Reasoning | 79 | 79 | — |
| Context window | 88 | 88 | — |
| Multimodal | 82 | 82 | — |
| Coding | 73 | 73 | — |
| Cost efficiency | 75 | 75 | — |
| **Overall** | **79** | **79** | **—** |

New and corrected data (all found 2026-10-08):

- **No new Cyber-variant scores exist.** BenchLM now tracks `Gemini 3.8 Flash Cyber` with exactly 2 of 623 benchmarks (CyberGym 86.2%, CWE-Bench 47.2% — both confirming the original figures), overall score "not computed", pricing "unavailable". The DeepMind model card and Fairwind gating are unchanged.
- **Methodology detail surfaced:** Google's eval-methodology page states CyberGym/CWE-Bench results "are computed by benchmark owners, Collinear AI, using the Antigravity agent harness with high thinking" — vendor-published but externally computed.
- **Shared-core refresh (standard 3.8 Flash, not the Cyber twin):** Terminal-Bench 2.1 **90.8%** (datacamp transcription of Google's eval table; the original file cited 89.4% from the model card), SWE-Bench Pro 61.6%, SWE-Atlas 51.9%, τ³-bench Banking 38.1%, CharXiv 86.2%, HLE 45.4% (HLE-Verified 54.9% still the headline).
- **Pricing check:** the Cyber variant still has no public price; the standard 3.8 Flash anchor ($0.75/$3.75) is introductory and **expires 2026-12-31 → $1.50/$7.50 from 2027-01-01** — the cost assumption in the Cost-efficiency dim should be read with that deadline.
- Context: BenchLM ranks standard 3.8 Flash at 73.04 (#/887, updated 2026-10-07); the Cyber variant remains unranked. No AA v4.3 re-base figure is published for either variant (the original "AA Index 59" was a v4.1-era number for the shared core).
- Google's launch blog and DeepMind pages remain the sole sources; Fairwind program (~650 orgs) still the only access path.

Gaps still open after re-run: GPQA / HLE for the Cyber variant itself, MRCR retrieval, Cyber-specific multimodal scores, public pricing, any independent (non-Google-computed) Cyber eval.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-20
- Method: public web research (blog.google, deepmind.google, vellum.ai, miraflow.ai, byteiota.com, shattered.io, codeconductor.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.