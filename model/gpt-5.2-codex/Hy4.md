- Source: OpenAI/GPT-5.2-Codex
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2-Codex
- **Short description:** OpenAI's 2025-12-18 agentic programming model built on GPT-5.2, adding context compression, large-scale code refactoring, Windows-environment performance and defensive-cyber safeguards. A distinct model; GPT-5.1-Codex-Max and GPT-5.3-Codex are separate.
- **Provider / access:** Codex CLI, IDE extensions, cloud platforms and the macOS desktop app for paid ChatGPT users; a "Trusted Access" programme for cybersecurity professionals. Supported as a custom model in Tencent CodeBuddy Code 2.0 from 2026-01-22.
- **Release / knowledge:** 2025-12-18 (some sources 12-19); knowledge cutoff: no verified public score found.
- **IDs:** `gpt-5.2-codex` family ID as cited. No free Zen ID verified.
- **Context window:** no verified token figure in the retrieved pages — no verified public score found. **Long-context compression** is a headline feature, enabling extended agent sessions.
- **Modalities:** text and code in, text/code out; terminal-based agentic software engineering, large-scale refactoring, vulnerability discovery and defensive security work, Windows agent workflows. No verified image/audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** no rate card in the retrieved pages — no verified public price found.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Combines GPT-5.2 general cognition with GPT-5.1-Codex-Max terminal-operation capability; agent sandbox and specialised security training.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **64%**
- SWE-Bench Pro: **56.4%**
- Both described as state-of-the-art at launch (directional)
- Trusted Access programme for defensive cyber work (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Improved instruction following and long-context understanding vs the prior Codex generation (qualitative)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-Bench Pro **56.4%** and Terminal-Bench 2.0 **64%** as above
- Large-scale code refactoring and Windows-environment agentic coding (qualitative)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- Long-context compression for extended agentic sessions; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 87/100.** 64% Terminal-Bench 2.0, SWE-Bench Pro 56.4%, context compression for long sessions, and defensive-cyber tooling with a Trusted Access programme; capped by no τ-bench/OSWorld/GDPval figure.
- **Reasoning: 83/100.** GPT-5.2-class cognition with improved instruction following and long-context understanding; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 86/100.** Explicit long-context compression enabling extended agent sessions; capped by no verified token window and no retrieval benchmark.
- **Multimodal: 76/100.** Scored conservatively: the retrieved sources document a text/code terminal agent, with no verified image/audio/video input.
- **Coding: 90/100.** SOTA-at-launch SWE-Bench Pro 56.4% and Terminal-Bench 2.0 64%, plus large-scale refactoring and Windows support; capped by no SWE-bench Verified / LiveCodeBench figure.
- **Cost efficiency: 80/100.** Broad Codex/IDE/cloud availability at unchanged GPT-5.2-series pricing per launch coverage; capped by no verifiable rate card and paid-tier-only access. Excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 87, 83, 86, 76, 90 = 84.4 → 84. Best fit: terminal-based agentic software engineering and defensive security work; superseded by GPT-5.3-Codex and GPT-5.4.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-5.2-Codex article retrieved via public web search excerpt (release, SWE-Bench Pro 56.4%, Terminal-Bench 2.0 64%, context compression, Windows, Trusted Access, CodeBuddy integration), with launch coverage (澎湃, 百家号) for the SOTA-at-launch positioning — labelled secondary. The 2025-12-18 vs 12-19 date discrepancy is reported separately by source. GPT-5.1-Codex-Max and GPT-5.3-Codex are separate models, never merged. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [GPT-5.2-Codex — 百度百科 (retrieved via search excerpt; benchmarks, features, availability)](https://baike.baidu.com/item/GPT-5.2-Codex/67101515)
  - [智能体编程模型 — 百度百科 (retrieved via search excerpt; generation context)](https://baike.baidu.com/item/智能体编程模型/67974693)
