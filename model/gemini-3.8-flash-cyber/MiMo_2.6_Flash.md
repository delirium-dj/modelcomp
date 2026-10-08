# Gemini 3.8 Flash Cyber — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`gemini-3.8-flash-cyber` fine-tune, Fairwind Program)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber — Google DeepMind's **cybersecurity fine-tune** of Gemini 3.8 Flash, announced **2026-09-02** ("powered by the same foundational intelligence" as mainline 3.8 Flash); successor to Gemini 3.5 Flash Cyber. Narrow mission: **find, validate and patch** vulnerabilities in real codebases — not general chat.
- **Short description:** Mainline Flash with a **more permissive set of cyber mitigations** (the stated reason it stays gated) aimed at vetted defensive teams; pairs with Google's **CodeMender** code-security agent (repository analysis → candidate vulns → verification → human-review patches). Three outside result sets back the launch: Chrome Security (**2.6× more correct patches** than "much larger commercial models"), **Wiz** (+7.5–9.7% recall at 2.3–5.2× lower cost vs leading frontier models), and Google Cloud VRT (critical foundational vulnerability found in **under two hours** after months of prior work) — all case evidence with missing denominators, flagged as such.
- **Provider / access:** **Fairwind Program only** — application/vetting for governments, critical-infrastructure operators, software maintainers, academic cyber labs (650+ partners as of Oct 2026); user-level auth + phishing-resistant MFA, in-house defenders only, no sharing/resale, background checks. **No public API, no public API ID, no per-token price, no self-serve endpoint, no separate public model card** (kingy.ai audit, 2026-09-02). Zero data retention available via Gemini Enterprise Agent Platform under documented conditions. Closed weights.
- **Release / knowledge:** announced 2026-09-02; knowledge cutoff not published. **Succeeded in role by Gemini 4 Argon** (2026-09-30, now Fairwind's flagship: 85.8 vs 71.0 real-world discovery, 70.9 vs 58.2 on Wiz pentest, CWE-bench v1 68%) — Google has not declared 3.8 Flash Cyber retired.
- **Context window:** **1,048,576 in / 65,536 out** (Google API documentation, shared with base 3.8 Flash; kingy notes formal Cyber-deployment specs are undisclosed).
- **Modalities:** **text, code in; text, code out** (HokAI/Google docs check 2026-10-02) — the Cyber deployment does **not** document the base model's image/video/audio/PDF inputs; scored as text/code-only below.
- **Pricing:** **none published** ("Flash-level cost" is vendor characterization only; no rate card). The $3.64 figure below is mean billed API cost of one CWE-Bench rollout, not a token tariff. Mainline Flash's intro pricing ($0.75/$3.75 to 2026-12-31, then $1.50/$7.50) does **not** apply.
- **Architecture:** proprietary fine-tune of Gemini 3.8 Flash (1M-context, 65K-output serving stack).

### Raw benchmarks found

> Primary: Google's launch package (2026-09-02) as transcribed and evidence-graded by
> kingy.ai (deep audit, 2026-09-02) and HokAI (checked 2026-10-02). **All four disclosed
> rows are cyber-specific** — Google publishes no GPQA/HLE/MMLU-Pro/SWE-bench Verified
> figures for this fine-tune (HokAI lists that as a con). Evidence classes marked per kingy.

Cyber / agentic coding:

- **CyberGym pass@1: 86.2%** (Final-submission setting, no majority voting; Google ran its model in the internal Antigravity harness; rivals' scores from their owners' proprietary harnesses). Comparison set: GPT-5.5-Cyber 85.6, Mythos 5 83.8, GPT-5.6 Sol 83.6, Gemini 3.5 Flash Cyber 77.5. Caveat: CyberGym Level-1 = *reproduce a disclosed vulnerability* in 188 C/C++ projects (1,507 tasks), not blind discovery — **B/moderate** evidence.
- **CWE-Bench v0 pass@1: 47.2%** at **$3.64 mean cost/rollout** (external held-out audit-and-patch, Collinear AI/AA-run, 100 tasks / 54 CWEs / 6 language families; pass requires exploit test dead **and** existing tests green). Beats GPT-5.6 Sol 44.2 ($2.29), Gemini 3.7 Flash 44.0 ($1.43), Opus 4.8 42.0 ($2.43); trails Fable 5 **47.8** ($10.27 — Cyber costs 64.6% less per rollout). **A-/high** evidence.
- **Google private 20-language historical-vuln set: 71.0% recall** (1,200+ confirmed vulns; vs Gemini 3.7 Flash 58.9, 3.5 Flash Cyber 46.6) — internal, no precision/breakdown published; **C/low-moderate** evidence.
- Chrome Security 2.6× correct patches; Wiz +7.5–9.7% recall at 2.3–5.2× cheaper; <2-hour critical finding — partner/internal case evidence, **C-/low** (no denominators).
- Terminal-Bench / OSWorld / τ²-bench / GDPval / BrowseComp / Toolathlon: **no rows published for this deployment**.

Safety-adjacent:

- Gray Swan indirect prompt injection: **6.0% ASR@15** (lower = better; mainline 3.8 Flash 5.5, Claude Opus 5 4.8, Fable 5 6.5, Sonnet 5 6.7 — competitive despite relaxed cyber mitigations). Partner-run, transfer-only/no-computer-use config; **B+** evidence.

General reasoning / coding / multimodal:

- GPQA, HLE, AA Index, MMLU-Pro, SWE-bench Verified, LiveCodeBench, vision suites: **not published for the Cyber fine-tune**. Google asserts shared foundational intelligence with mainline 3.8 Flash (our `gemini-3.8-flash` report: reasoning 89, coding 91 on its own tables) — used as foundation below, with the non-disclosure flagged.

Long context:

- 1M/65K per Google docs; no retrieval benchmark row (same gap as mainline).

### Normalized scores (1–100)

- **Tool use: 81/100.** The specialist case is strong: CyberGym 86.2 leads Google's five-model chart, CWE-Bench 47.2 is second-place at a third of the leader's cost with an all-or-nothing verifier, 71% recall on the private set, plus three named external teams (Chrome, Wiz, Cloud VRT) putting it in real workflows; held down by zero general agent rows (no OSWorld/τ²/GDPval/TB/BrowseComp — security-domain coverage only) and harness-dependent comparisons.
- **Reasoning: 89/100.** Foundation-shared with mainline 3.8 Flash (Google's explicit claim), whose GPQA/HLE profile we scored at 89 — no cyber-specific reasoning rows exist to raise or lower it; non-disclosure flagged rather than deducted twice.
- **Context window: 95/100.** 1M/65K documented for this deployment → ≥1M tier floor; no retrieval row, same as base.
- **Multimodal: 60/100.** The Cyber deployment documents **text/code only** — image/video/audio/PDF inputs of the base model are not part of this product's published surface (kingy: specs "not disclosed"; HokAI: text, code). Text-only band ≈ 55, held at the top of that band because the underlying foundation is natively multimodal and could plausibly expose it under different terms.
- **Coding: 91/100.** Foundation-shared coding profile of mainline 3.8 Flash (91 on our scale) reinforced by CWE-Bench 47.2 — patch quality on par with a $10/rollout frontier model at $3.64 — and by the Chrome patch multiplier; the general TB/SWE-V rows remain mainline's, flagged.
- **Cost efficiency: 35/100** (excluded from Overall). No public rate card, no self-serve API, application-plus-background-check access — the cost axis is replaced by procurement; $3.64/rollout suggests Flash-class economics but cannot be converted into $/1M.
- **Overall Score: 83/100.** (81+89+95+60+91)/5 = 83.2 → 83 — mainline 3.8 Flash intelligence with a documented security-agent edge (CWE-Bench cost-adjusted, CyberGym-leading) but text/code-only exposure, unpublished general benchmarks, and access that most teams physically cannot buy — with Gemini 4 Argon already holding Fairwind's flagship crown.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — DuckDuckGo → kingy.ai evidence-graded benchmark audit (launch-package transcription with per-row provenance classes), HokAI model directory (specs, Fairwind status, checked 2026-10-02), Google Gemini 3.8 launch/Fairwind/methodology references as cited therein; scores are normalized 1–100 interpretations, not official vendor scores; case-evidence rows (Chrome/Wiz/VRT) treated as anecdotes, not benchmarks; general-capability rows inherited from the mainline foundation per Google's claim, flagged.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
