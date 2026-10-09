# GLM-5.3 Flash — findings by Grok 4.6

- Source: Z.ai / Zhipu (`glm-5.3-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 Flash
- **Short description:** Z.ai’s first natively multimodal GLM-5 model: 320B-total / 18B-active MoE with hybrid linear+sparse attention, aimed at cheap long-context coding and agent work. Stealth-tested as `ox-alpha` on OpenCode and OpenRouter before the named release. Distinct from full GLM-5.3 (do not mix SWE-bench 95.4% from that ID).
- **Provider / access:** Z.ai / Zhipu API `glm-5.3-flash`; OpenRouter `z-ai/glm-5.3-flash`; Hugging Face weights for SGLang / vLLM / TokenSpeed. GLM Coding Plan includes the model (3× quota vs GLM-5.3). No verified OpenCode Zen Free ID found (coding-plan $0 routes exist on some hosts).
- **Release / knowledge:** Announced 2026-08-26. Knowledge cutoff not published on the launch post.
- **IDs:** `z-ai/glm-5.3-flash` / `zai-org/GLM-5.3-Flash`; no Free ID on Zen
- **Context window:** 1M tokens; max output ~128K–131K depending on host (vendor/modelbenchmark listings)
- **Modalities:** Native multimodal (text + vision; document/PDF workflows in OfficeQA-style evals; video benches via native or frame extraction). Tool use / agents. Open-weights.
- **Pricing (as of 2026-10-09):** List **$0.15 / $0.50** per 1M in/out, cache read **$0.03** (docs.z.ai / The Model Gap). Launch promo $0.075/$0.25 expired 2026-09-09. Cost scored on list, not promo or coding-plan $0.
- **Architecture:** 320B total / 18B active MoE; 45 layers; hybrid sparse + linear attention, IndexPool, mHC; open weights on Hugging Face.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1773 Elo** (Z.ai table, “evaluated by Artificial Analysis”)
- Terminal-Bench 2.1: **84.3%** (Z.ai; Artificial Analysis / The Model Gap same figure)
- Terminal-Bench 4.0: **32.8%** (Artificial Analysis via The Model Gap, 2026-10-08)
- Toolathlon Verified: **78.4%** (Z.ai; The Model Gap 2026-10-03)
- AutomationBench v1.0.6: **48.8%** (Z.ai)
- Agents' Last Exam: **26.3%** (Z.ai, vendor-run)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / MCP Atlas: no verified public score found
- OSWorld 2.0: **59.1%** (Z.ai vision/agent table)

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Artificial Analysis via The Model Gap); Epoch AI **90.2 ±1.7** (max, modelbenchmark.io)
- HLE (no tools): **39.9%** (Artificial Analysis)
- HLE w/ tools: **55.3%** (Z.ai table)
- Artificial Analysis Intelligence Index v4.1.1: **57** (Z.ai launch post)
- LiveBench: **71.6** (The Model Gap) / **71.1** (modelbenchmark.io)
- ARC-AGI-2 (max): **65.8%** (The Model Gap)
- CritPt / AA-Omniscience: no verified public score found

Coding:

- DeepSWE v1.1: **63.4%** (Z.ai); **63.0%** DeepSWE leaderboard “glm-5.3-flash [max]” (The Model Gap)
- Terminal-Bench 2.1: **84.3%** (also listed under coding)
- NL2Repo: **56.3%** (Z.ai)
- Z.ai Code Bench v1.0 (max): **29.0** vs Opus 4.8 **29.5** (vendor in-house)
- SWE-bench Verified / SWE-Pro / SciCode / LiveCodeBench / Vibe: no verified public score found for **Flash** (do not use GLM-5.3’s Vals SWE-bench 95.4%)

Long context:

- 1M window with hybrid linear/sparse attention designed for 1M serving. No verified MRCR / AA-LCR number found for this ID.

Multimodal (vendor table):

- OfficeQA Pro: **62.4%**; CharXiv Reasoning w/ tools: **89.4%**; Chartography w/ tools: **78.0%**; BabyVision: **53.4%**; MVbench: **77.8%**; MMVU: **80.5%**; Vision2Web: **77.8%**

### Normalized scores (1–100)

- **Tool use: 90/100.** GDPval-AA 1773 and TB2.1 84.3 sit near the frontier refs; Toolathlon 78.4 is strong. Capped by AutomationBench 48.8, ALE 26.3, TB4.0 32.8, and missing Tau3.
- **Reasoning: 89/100.** GPQA ~91% and Index 57 / HLE-with-tools 55.3% are high-frontier. Capped by HLE no-tools 39.9% sitting on the 40% frontier line and missing CritPt/Omniscience isolates.
- **Context window: 96/100.** Official 1M maps to 95–100; architecture is built for 1M KV, but no ≥98% retrieval-at-512K+ figure, so not 100.
- **Multimodal: 80/100.** Native vision plus document/PDF-style OfficeQA and video-bench numbers (MMVU 80.5, MVBench 77.8) enter the +video/PDF 75–90 band. Capped by no native audio I/O found.
- **Coding: 88/100.** TB2.1 84.3% is near the 85%+ frontier ref; DeepSWE 63.4% is below the 74%+ ref. Capped by no Flash SWE-Verified/SciCode/LiveCode public scores.
- **Cost efficiency: 95/100.** List $0.15/$0.50 sits between the ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (~92) anchors. Promo and coding-plan $0 are not the scored tier.
- **Overall Score: 89/100.** Mean of 90, 89, 96, 80, 88 = 88.6 → 89. Best-fit: default cheap multimodal coding/agent model when list price is acceptable; do not treat it as GLM-5.3’s SWE-95% sibling.

---

## Signature

- Provided by: **Grok 4.6 (xai/grok-4.6)** — 2026-10-09
- Method: public internet research (Z.ai launch post, Artificial Analysis via The Model Gap, modelbenchmark.io, LLMBoard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
