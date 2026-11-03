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

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Gemini 3.8 Flash Cyber — findings by Mimo v2.6 Flash

- Source: Google DeepMind/`gemini-3.8-flash-cyber`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's most capable cybersecurity fine-tune of Gemini 3.8 Flash — autonomous vulnerability discovery and automated patching across 20 languages — restricted to trusted defenders via the **Fairwind Program** (governments, critical infrastructure, software maintainers); ships with CodeMender harness and more permissive cyber mitigations than the standard model.
- **Provider / access:** Fairwind Program only (priority access); **not** on the public Gemini API / AI Studio; **no OpenCode Zen Free ID** (`noFreeId: true`); no public pricing card.
- **Release / knowledge:** 2026-09-02 (Google blog + DeepMind page, same day as general Gemini 3.8 Flash); knowledge cutoff inherits 3.8 Flash family (Jan 2025-class, not separately restated).
- **IDs:** `google/gemini-3-8-flash-cyber` (repo meta; not a public API endpoint).
- **Context window:** 1,048,576 input; 65,536 max output (per meta / 3.8 Flash family spec).
- **Modalities:** text/code in; text/code out (meta — product surface is code/vuln analysis; base 3.8 Flash is multimodal but Cyber card does not advertise image/video input); thinking/effort levels inherit Flash stack; tool calls yes (CodeMender agent loop).
- **Pricing (as of 2026-09-22):** **Not published** for Fairwind access. Sibling general 3.8 Flash intro price $0.75/$3.75 per 1M through 2026-12-31 ($1.50/$7.50 from 2027-01-01) is a floor-of-reference only, not a Cyber rate card.
- **Architecture:** fine-tune / variant of proprietary Gemini 3.8 Flash core (undisclosed params); Frontier Safety Framework mitigations deliberately relaxed for cyber defense vs the standard 3.8 Flash CBRN/cyber-offense safeguards.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). All rows below are Google self-reported (launch post, DeepMind cyber page, Vellum/DataCamp coverage of the official methodology page) unless noted.

Agent / tool use:

- CyberGym (autonomous vuln discovery, pass@1): **86.2%** (Google; beats GPT-5.5 Cyber 85.6, Claude Mythos 5 83.8, GPT-5.6 Sol 83.6, 3.5 Flash Cyber 77.5)
- Google internal real-world vuln discovery (20 languages, >1,200 vulns): **71.0%** success (Google; vs 3.7 Flash 58.9, 3.5 Flash Cyber 46.6)
- CWE-Bench (Collinear, patching pass@1): **47.2%** (Google; Pareto frontier vs leading frontier model 47.8% at ~3× cost/rollout)
- Chrome Security (correct patches vs best larger commercial models): **2.6×** more correct patches (Google qualitative)
- Wiz internal pentest recall: **+7.5–9.7 pts** at 2.3–5.2× lower cost (Google partner claim)
- Gray Swan prompt-injection ASR@1: **6.0%** (lower better; Google chart — sibling 3.8 Flash 5.5%, Opus 5 4.8%, GPT-5.6 Sol 27.0%)
- Tau3 / Toolathlon / OSWorld / GDPval for Cyber variant: no verified public score found (general-purpose rows live on the standard 3.8 Flash card, not this fine-tune)

Reasoning / knowledge:

- General GPQA / HLE / ARC-AGI for Cyber variant: no verified public score found (shares foundational intelligence with 3.8 Flash: HLE-Verified 54.9%, BioMysteryBench/LABBench2 strong on the sibling card — sibling data only, not re-run on Cyber)
- Traictory lists an aggregate "Average Score 74.6%" from its ZeroEval-style roll-up — aggregator composite, not a Google metric

Coding:

- Patching is the measured coding surface: CWE-Bench 47.2%, internal multi-language fix loops via CodeMender
- DeepSWE / SWE-bench Verified / Terminal-Bench for Cyber: no verified public score found (standard 3.8 Flash card: DeepSWE v1.1 73.7%, TB2.1 89.4% — sibling only)

Long context:

- 1M window per family spec; MRCR / retrieval quality for Cyber: no verified public score found

Multimodal:

- Meta lists text/code only; image/video input for the Cyber product surface: no verified public score found (base 3.8 Flash is multimodal: CharXiv 86.2%, LVBench 87.8% — sibling only)

### Normalized scores (1–100)

- **Tool use: 84/100.** CyberGym 86.2 #1-class, internal 71% across 20 languages, CodeMender agentic find→verify→patch loop, Wiz/Chrome production adoption — best-in-class for the cyber vertical; capped because general Tau/MCP/OSWorld/GDPval evidence is absent for this fine-tune.
- **Reasoning: 78/100.** Inherits 3.8 Flash's strong multi-step reasoning core (sibling HLE-Verified 54.9%) and must reason about vuln chains, but Cyber card publishes no GPQA/HLE of its own — score rests on foundation-model inference plus vertical wins.
- **Context window: 96/100.** Full 1,048,576 / 64K family window with no contrary retrieval data (though none published either).
- **Multimodal: 15/100.** Product surface and repo meta are text/code in → text/code out only; template rule: text-only = 15 (sibling multimodal scores do not transfer to this entry's declared modalities).
- **Coding: 88/100.** CWE-Bench 47.2% on Pareto frontier for patching + 71% multi-language fix success + Chrome/Wiz field results — elite automated vulnerability-fixing coding; general SWE-bench/DeepSWE rows missing for Cyber itself.
- **Cost efficiency: 45/100.** No public price; access is application/vetting-gated (Fairwind) with no free ID — effective cost is "availability friction + negotiated enterprise terms," not a token rate; sibling Flash intro price is not a Cyber entitlement.
- **Overall Score: 72/100.** Mean of five quality dims (84+78+96+15+88)/5 = 72.2 → 72. Best-fit: vetted defensive security teams needing frontier vuln discovery/patching at Flash latency — not a general-purpose coding or multimodal agent; if you need CharXiv/OMNI-style multimodal or public API billing, use standard `gemini-3.8-flash` instead.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Google blog 2026-09-02, DeepMind Gemini 3.8 Flash Cyber page + evals methodology, Vellum benchmarks explainer, DataCamp, LLM Stats, Traictory, scalevise); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

