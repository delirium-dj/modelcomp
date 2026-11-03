# Gemini 3.8 Flash Cyber — findings by Muse Spark 1.2

- Source: Google DeepMind (opencode/gemini-3.8-flash-cyber — Fairwind gated)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Cybersecurity-specialized post-training of Gemini 3.8 Flash (2026-09-02) for vulnerability discovery and automated patching; frontier patching at Flash cost, gated via Fairwind Program.
- **Provider / access:** Google Gemini API / Vertex AI `gemini-3.8-flash-cyber` (allowlist, Fairwind); same pricing as 3.8 Flash ($0.75/$3.75 intro through 2026-12-31, then $1.50/$7.50). Not general public API.
- **Release / knowledge:** 2026-09-02 (Google blog "Gemini 3.8 Flash and Flash Cyber"); knowledge cutoff 2026-06
- **IDs:** `google/gemini-3.8-flash-cyber` (Vertex), `opencode/gemini-3.8-flash-cyber` (Zen alias if mapped)
- **Context window:** 1,048,576 total (1M in / 65,536 max out) — inherits 3.8 Flash spec via DeepMind model card
- **Modalities:** Text, image, audio, video in; text out; reasoning yes (LOW/MEDIUM/HIGH — default MEDIUM); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-24):** $0.75 in / $3.75 out per 1M (intro) — same as 3.8 Flash; cached $0.08 per 1M; Cyber gated via Fairwind (trusted defenders only)
- **Architecture:** Proprietary (Gemini 3.8 Flash post-trained for cyber; dense transformer with effort control)

### Raw benchmarks found

Agent / tool use:

- CyberGym (vuln discovery): **86.2%** (Google official 2026-09-02 — CyberGym industry benchmark)
- Internal 20-language vuln suite: **>70% success** (Google internal — "above 70% on complex codebases in 20 languages")
- CWE-Bench (Collinear patching, pass@1): **47.2%** (Google/DeepMind — vs leading frontier 47.8% Fable 5 at lower cost; pareto frontier)
- Chrome vuln patching: **2.6× correct patches vs larger commercial models** (Google Chrome Security team)
- Wiz pen-test recall: **+7.5% to +9.7% recall at 2-5× lower cost** (Wiz internal)
- Terminal-Bench 2.1: **no verified isolated public score for Cyber SKU found** (inherit 3.8 Flash 89.4-90.8% as proxy — not counted as Cyber verified)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified isolated public score for Cyber found** (proxy: 3.8 Flash lineage 90%+ class)
- HLE: **no verified isolated score for Cyber found** (3.8 Flash 45.4% / HLE-Verified 54.9% proxy)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified AA Intelligence for Cyber SKU found** (parent 3.8 Flash AA Coding 76.3, BenchLM 75.61 supported)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified isolated public score for Cyber found** (inherit DeepSWE 73.7% for 3.8 Flash as capability proxy)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **DeepSWE v1.1 73.7% for parent 3.8 Flash** (Google via Logan Kilpatrick) — not counted as Cyber direct; CWE-Bench is primary coding-patching signal for Cyber

Long context:

- 1M context (inherited); Gray Swan prompt-injection robustness significant leap (vendor claim, no numeric); no MRCR/RULER at 1M disclosed

### Normalized scores (1–100)

- **Tool use: 78/100.** CyberGym 86.2 + 20-lang >70% + Wiz/Chromegating strong agent signals; capped by no Tau/GDPval/MCP-Atlas and gated distribution.
- **Reasoning: 68/100.** Proxy reasoning from 3.8 Flash 54.9% HLE-Verified + professional Finance/Legal agent gains; isolated Cyber reasoning not benchmarked, capped below 75.
- **Context window: 96/100.** 1,048,576 total; 1M tier per DeepMind spec; capped below 100 vs 2M but 1M verified.
- **Multimodal: 85/100.** Inherits 3.8 Flash multimodal (text/image/audio/video in); security-focused tuning retains perception; capped vs Pro visual SOTA.
- **Coding: 82/100.** CWE-Bench 47.2% pareto + CyberGym 86.2 + parent DeepSWE 73.7% patching specialist; narrowly trails Fable 47.8% and frontier closed, hence below 85.
- **Cost efficiency: 58/100.** Paid $0.75/$3.75 (intro) then $1.50/$7.50; frontier patching at Flash cost per Google, but not $0 free and gated access limits value.
- **Overall Score: 82/100.** Mean of five non-cost dims (78+68+96+85+82)/5=81.8 → 82; best-fit when automated vuln discovery/patching at low cost outweighs general coding depth — otherwise use public 3.8 Flash.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (Google Blog 2026-09-02, DeepMind model card, CyberPress, VentureBeat, Blockchain.News, Gigazine); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
