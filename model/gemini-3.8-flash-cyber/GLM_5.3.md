# Gemini 3.8 Flash Cyber — findings by GLM 5.3

- Source: Google DeepMind (`gemini-3-8-flash-cyber`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google DeepMind's cybersecurity fine-tune of Gemini 3.8 Flash, built for finding, validating and patching vulnerabilities; access is restricted via the Fairwind Program. Top use case: defensive security work (vulnerability discovery/patching) for vetted organizations.
- **Provider / access:** Google (Fairwind Program — restricted access); **no OpenCode Zen ID**, no public endpoint.
- **Release / knowledge:** September 2026 (with the Gemini 3.8 generation); knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3-8-flash-cyber` (Fairwind Program only; no Zen ID, no Free ID)
- **Context window:** 1M tokens total / 65K max output (curated platform metadata).
- **Modalities:** text/code in; text/code out (the Cyber fine-tune drops the base model's image/speech/video input); reasoning yes; tool calls.
- **Pricing (as of 2026-09-24):** no public pricing (restricted Fairwind Program); scored provisionally.
- **Architecture:** proprietary fine-tune of Gemini 3.8 Flash; parameter count not disclosed.

### Raw benchmarks found

Direct rows for this exact ID (BenchLM):

- CyberGym: **86.2%** (BenchLM `gemini-3-8-flash-cyber` — strong offensive/defensive cyber capability)
- CWE-Bench: **47.2%** (BenchLM — real-world vulnerability remediation)

General-capability rows below are from the **base Gemini 3.8 Flash** (verified this session on BenchLM) — the closest proxy, since the Cyber model is a fine-tune of it (provisional):

- Terminal-Bench 2.1: **89.4%** (base; Vals 81.3%); Tau3-Banking **44.9%**; GDPval-AA **1545** (BenchLM)
- GPQA Diamond: **95.3%** (base); HLE **47.8%** / **54.9%** verified; AA-LCR **81.3%**; AA Index **41** (BenchLM)
- SWE-bench Verified (Vals): **80.0%** (base); DeepSWE **73.8%**; LiveCodeBench **89.5%**; SciCode **56.6%**; AA Coding Index **76.3%** (BenchLM)

Not found for this exact ID: Terminal-Bench 4.0, Claw-Eval, Toolathlon, MCP-Atlas, MRCR/RULER (beyond base), Omniscience.

### Normalized scores (1–100)

- **Tool use: 85/100.** CyberGym 86.2% is elite in-domain; general tool use rides the base proxy (TB2.1 89.4%, GDPval 1545, Tau3 44.9%) — strong but not general-purpose-proven for this exact SKU.
- **Reasoning: 88/100.** Base-proxy GPQA 95.3% and HLE 47.8–54.9% are frontier-level; the fine-tune's own reasoning rows are unpublished (provisional).
- **Context window: 95/100.** 1M total context (top tier band) with 65K out; no retrieval verification for 100.
- **Multimodal: 15/100.** Text/code only by design — the Cyber fine-tune drops the base's image/speech/video input.
- **Coding: 90/100.** Base-proxy SWE-bench V 80.0%, LiveCodeBench 89.5%, DeepSWE 73.8% plus in-domain CWE-Bench 47.2% — a hard-coding specialist.
- **Cost efficiency: 50/100.** No public pricing (restricted program) — scored provisionally at unknown; program access, not per-token, is the gate.
- **Overall Score: 74.6/100.** (85 + 88 + 95 + 15 + 90) / 5 = 74.6. Best-fit: the purpose-built defensive-security engine of the Gemini line — text-only by design, unmatched in-domain, gated access.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, platform metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
