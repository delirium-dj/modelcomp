# Gemini 3.8 Flash Cyber — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Gemini 3.8 Flash Cyber
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google DeepMind's cybersecurity fine-tune of Gemini 3.8 Flash — frontier-level vulnerability detection and automated patching for trusted defenders, distributed through the Fairwind Program (national cyber authorities, critical-infrastructure operators, software maintainers; academic defensive-benchmarking labs welcome).
- **Provider / access:** Google DeepMind — Fairwind Program only; not generally available. (DeepMind's Fairwind page now also offers Gemini 4 Argon with cyber capabilities plus CodeMender — the program's lineup is evolving.)
- **Release / knowledge:** Released 2026-09-02 alongside Gemini 3.8 Flash. Knowledge cutoff not stated in captured sources.
- **IDs:** `google/gemini-3-8-flash-cyber` (repo meta.json). No Free ID on Zen (meta.json `noFreeId: true`).
- **Context window:** 1,048,576 tokens (1M) / 65K output (repo meta.json).
- **Modalities:** Text, code in; text, code out (repo meta.json). The base Gemini 3.8 Flash is natively multimodal; the Cyber variant's support beyond text/code is unverified.
- **Pricing (as of 2026-10):** No public pricing (restricted program). Base model: $0.75 input / $3.75 output per 1M introductory (through 2026-12-31; $1.50/$7.50 from 2027-01-01), $0.075 cached, free tier on the Gemini API.
- **Architecture:** proprietary fine-tune of Gemini 3.8 Flash.

### Raw benchmarks found

Cybersecurity-specific (Google launch blog + BenchmarkList, 2026-09-02):

Agent / tool use:

- CyberGym (autonomous vulnerability discovery): **86.2%** score (rank 6/36, 86th percentile; field leader DeepSeek-V4-Flash 93.17). Google: "frontier-level performance… surpasses 3.5 Flash Cyber as well as significantly larger frontier models."
- CWE-Bench (Collinear, external audit-and-patch, 100 tasks / 54 CWEs): **Pass@1 47.2%** — Pareto frontier vs a leading frontier model at 47.8%, at significantly lower cost (rank 2/14, 92nd percentile; $3.64 average cost per rollout, thinking mode high).
- Internal benchmark across 20 programming languages: **>70%** success rate (vendor).
- Chrome Security team: **2.6× more correct patches** than much larger best commercial models (vendor).
- Wiz internal penetration-testing benchmark: **+7.5–9.7% higher recall** at 2.3–5.2× lower cost (vendor).
- Google Cloud Vulnerability Research: critical foundational vulnerability found in <2 hours (typically months) (vendor anecdote).

Base-model benchmarks (inherited from Gemini 3.8 Flash — NOT separately measured for the Cyber variant):

- DeepSWE v1.1: **73.7%** (self-computed, mini-swe agent harness, high thinking).
- Terminal-Bench 2.1: **89.4%** (model card, self-computed) / **90.8%** (Google Cloud docs comparison; 3.7 Flash: 81.6%).
- Terminal-Bench 4.0: **19.1%** (official public leaderboard, highest thinking level).
- HLE-Verified (full 1,811-item verified set): **54.9%** (self-computed).
- SWE-Bench Pro: **61.6%**; SWE-Atlas: **51.9%**; τ³-Bench Banking: **38.1%**; CharXiv: **86.2%**; GDP.pdf: **35.0%**; HLE (classic): **45.4%**.
- Gray Swan IPI (combined attack set, transfer-only, no computer use): **6.0%** attack success rate @15 (rank 3/13, 83rd percentile; field leader O-5 4.8%).

Reasoning / knowledge: no Cyber-variant-specific score found (see inherited HLE-Verified 54.9% above).
Coding: no Cyber-variant-specific score found beyond CWE-Bench (see inherited DeepSWE/TB above).
Long context: no MRCR/RULER score found; 1M window.
Multimodal: no Cyber-variant-specific score found.

### Normalized scores (1–100)

- **Tool use: 75/100.** CyberGym 86.2% and CWE-Bench 47.2% (Pareto frontier) are strong domain-agentic evidence with real-world validation (Chrome 2.6×, Wiz recall gains); no TB2.1/MCP-Atlas measured for the variant (base TB 2.1 89.4% is inherited, not measured).
- **Reasoning: 79/100.** Base-model HLE-Verified 54.9% clears the 40% frontier anchor; the Cyber fine-tune's general reasoning is not separately measured (inherited).
- **Context window: 95/100.** 1M tokens confirmed (65K output).
- **Multimodal: 15/100.** Text+code in/out per repo meta.json; the base model is natively multimodal but the Cyber variant's broader modality support is unverified.
- **Coding: 75/100.** Base DeepSWE 73.7% / TB 2.1 89.4% are inherited, and CWE-Bench 47.2% measures security patching directly; no SWE-bench Verified for the variant.
- **Cost efficiency: 90/100.** No public pricing (restricted program); the base model's $0.75/$3.75 introductory rate anchors the estimate.
- **Overall Score: 67.8/100.** Mean of the five quality dimensions; a domain-excellent security model whose scores are mostly inherited from the base, with a text/code-only multimodal penalty per the repo's metadata.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (Exa web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
