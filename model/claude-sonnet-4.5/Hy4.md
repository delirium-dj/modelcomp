- Source: Anthropic/Claude Sonnet 4.5
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's 2025-09-30 mid-tier model, built under the ASL-3 safety framework with CBRN content classifiers, notable for **30+ hours of continuous autonomous programming**. A distinct model; Sonnet 4 / 4.6 / 5 are separate.
- **Provider / access:** Claude API, native VS Code extension, Claude Agent SDK (checkpoint save, task rollback), Claude Code.
- **Release / knowledge:** 2025-09-30; knowledge cutoff: no verified public score found.
- **IDs:** `claude-sonnet-4-5` family ID as cited. No free Zen ID verified.
- **Context window:** no verified token figure in the retrieved pages — no verified public score found. Long-session stability via context editing/checkpointing (30+ hours).
- **Modalities:** text, image and code in, text/code out; computer use, parallel tool execution, long autonomous coding, database construction. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$3 / 1M input, $15 / 1M output** (launch coverage, unchanged from Sonnet 4).
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. ASL-3 safety framework with CBRN classifiers; 10x lower false-positive rate and stronger prompt-injection defence than the prior generation.

### Raw benchmarks found

Agent / tool use:

- OSWorld: **61.4%** (up from Sonnet 4's 42.2% four months earlier)
- Terminal-Bench: **50%**
- 30+ hours of continuous autonomous programming, generating ~**11,000 lines** of code and completing database setup in customer tests
- Tau3-Banking / Tau2-Bench / GDPval-AA / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-bench Verified: **77.2%** (Baike / CSDN); a launch report cites **82.0%** on the same benchmark name vs GPT-5's 74.5% and Gemini 2.5 Pro's 67.2% — conflicting figures reported separately with provenance, never merged
- Terminal-Bench **50%** as above
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 30+ hour sessions with checkpoint/rollback and context editing; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** 61.4% OSWorld (up from 42.2%), 50% Terminal-Bench, parallel tool execution and an unmatched-at-launch 30+ hour autonomous run with checkpoints/rollback; capped by no τ-bench/GDPval figure.
- **Reasoning: 85/100.** Strong ASL-3 alignment, 10x fewer false positives and long-session stability; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 84/100.** 30+ hour sustained sessions via context editing and checkpoints; capped by no verified token window and no retrieval benchmark.
- **Multimodal: 80/100.** Image input with 61.4% OSWorld computer use; capped by text/code-only output, no verified audio/video input, and no multimodal benchmark score.
- **Coding: 90/100.** 77.2% (or 82.0% per launch coverage) SWE-bench Verified — the best coding model at launch — with 11,000-line autonomous delivery; capped by the conflicting published figures.
- **Cost efficiency: 84/100.** $3/$15 per 1M at unchanged Sonnet 4 pricing with a large capability jump; excluded from Overall.
- **Overall Score: 85/100.** Half-up mean of 88, 85, 84, 80, 90 = 85.4 → 85. Best fit: long-running agentic coding and computer-use workflows in VS Code / Claude Code; superseded by Sonnet 4.6 / 5 / 5.5.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Claude Sonnet 4.5 article retrieved via public web search excerpt (release, ASL-3, 30-hour autonomy, SWE-bench Verified 77.2%, OSWorld 61.4%, Terminal-Bench 50%, 11,000 lines), plus launch coverage (亿恩网, 百家号) for the $3/$15 pricing and the conflicting 82.0% SWE-bench figure — both reported separately with provenance, never merged. Comparison rows for GPT-5 and Gemini 2.5 Pro are labelled by harness. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Claude Sonnet 4.5 — 百度百科 (retrieved via search excerpt; benchmarks, ASL-3, autonomy)](https://baike.baidu.com/item/Claude%20Sonnet%204.5/66804838)
  - [Anthropic 推出 Claude Sonnet 4.5 — 亿恩网 (retrieved via search excerpt; $3/$15 pricing)](https://www.ennews.com/news-108688.html)
