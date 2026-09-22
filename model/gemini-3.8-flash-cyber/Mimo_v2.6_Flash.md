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
