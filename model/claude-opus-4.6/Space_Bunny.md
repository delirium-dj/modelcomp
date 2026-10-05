# Claude Opus 4.6 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-opus-4-6`; adaptive reasoning, high/max configurations)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's frontier model for careful planning, long-running agentic coding, large codebases, research, and professional knowledge work.
- **Provider / access:** Anthropic Claude API (`claude-opus-4-6`); available on claude.ai, Anthropic's API, and major cloud platforms. Adaptive thinking and effort controls are documented.
- **Release / knowledge:** Anthropic announced Opus 4.6 on 2026-02-05. No knowledge cutoff was shown in the reviewed announcement.
- **IDs:** `claude-opus-4-6`; max/high are effort configurations.
- **Context window:** 1M tokens in beta (Anthropic announcement and Artificial Analysis, verified 2026-09-24); BenchLM independently lists 1M (verified 2026-10-05). Exact output limit was not shown in the announcement.
- **Modalities:** Text and image input; text output; vision, tool use, adaptive thinking, computer-use workflows, and document/spreadsheet tasks supported. Audio/video are not listed.
- **Pricing (as of 2026-09-24):** $5 per 1M input tokens and $25 per 1M output tokens.
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **81.42%** with prompt modification; Anthropic's standard result was averaged over 25 trials (Anthropic announcement/system-card footnotes)
- MCP Atlas: **62.7%** at high effort; Opus 4.6 was run at max effort for the reported evaluation (Anthropic announcement)
- BrowseComp: **86.8%** with a multi-agent harness; Anthropic describes a no-thinking max-effort setup with web search, web fetch, programmatic tool calling, and compaction (Anthropic announcement)
- Artificial Analysis Intelligence Index: **26** for the non-reasoning high page (Artificial Analysis, accessed 2026-09-24); this is not directly comparable to reasoning-variant indices.
- GDPval-AA: Anthropic says Opus 4.6 leads the next-best model by about **144 Elo** and its predecessor by **190 Elo**, but the absolute Elo is not shown in the reviewed text.
- Terminal-Bench 2.0: **65.4%** (Anthropic Claude Opus 4.6 system card, accessed 2026-10-05)
- τ²-bench: **84.8%** (Artificial Analysis, accessed 2026-10-05)
- Claw-Eval: **70.4%** (Claw-Eval leaderboard, accessed 2026-10-05)
- OSWorld-Verified: **72.7%**; CyberGym: **66.6%**; DeepSearchQA: **73.7%** (accessed 2026-10-05)
- ResearchClawBench: **19.9%**; JobBench: **36.7%**; Gert Labs: **61.85%**; ApprenticeBench: **5%** (accessed 2026-10-05)
- Toolathon and SWE Atlas: **no verified public exact value found**

Reasoning / knowledge:

- HLE with tools: **53.0%** after Anthropic's updated cheating-detection pipeline; an earlier **53.1%** value was corrected (Anthropic announcement, February 23, 2026 update). BenchLM/system card also lists **53%**; HLE without tools **40%**.
- GPQA: **91.3%** (Anthropic system card); GPQA-D **89.2%**; MMLU-Pro **82%** (Qwen3.6 comparison table) or **89.1%** (Arcee table) (accessed 2026-10-05). Varying harnesses are labeled as such.
- AA-GPQA Diamond: **84.0%**; AA-HLE: **19.1%** (Artificial Analysis, accessed 2026-10-05) — the AA HLE figure is markedly lower than the vendor's, which is worth recording.
- CritPt: **2.8%** (Artificial Analysis, accessed 2026-10-05) — the lowest CritPt reading among the models compared in this refresh, a serious frontier-science weakness.
- AA-LCR: **67.0%**; AA-IFBench: **44.6%**; AA-Omniscience Index: **2.4%**, Accuracy **45.8%**, Hallucination Rate **80.1%** (Artificial Analysis, accessed 2026-10-05)
- SuperGPQA: **95%** (Qwen3.6 comparison table); FrontierMath v2 Tier 4: **22.9%** (Epoch AI, accessed 2026-10-05) — a weak hard-math result.
- ARC-AGI 2: Anthropic documents a max-effort, 120K-thinking-budget run but does not expose the absolute score in the announcement text; an independent table gives AIME25 99.8% (Arcee).

Coding:

- SWE-bench Verified: **81.42%** with prompt modification (Anthropic); the system card lists **80.8%** (accessed 2026-10-05).
- MCP Atlas: **62.7%** at high effort (Anthropic)
- SWE-bench Pro: **53.4%** (Meta Muse Spark comparison chart, accessed 2026-10-05); SWE-Rebench **65.3%** (leaderboard)
- Vibe Code Bench: **57.57%** (Vals AI Vibe Code Bench v1.1, accessed 2026-10-05)
- LiveCodeBench Pro: **70.7%** (Meta Muse Spark comparison chart); FrontierCode v1.1 Main: **26.9%** (Cognition, accessed 2026-10-05) — the FrontierCode figure is notably low.
- React Native Evals: **84.1%** (leaderboard)
- LiveCodeBench, SciCode, and DeepSWE: **no verified public exact values found**

Long context:

- Anthropic verifies a 1M-token context window in beta.
- AA-LCR: **67.0%** (Artificial Analysis Long-Context Reasoning leaderboard, accessed 2026-10-05) — an independent retrieval result, newly available and mid-pack.

Sources consulted: [Anthropic Opus 4.6 announcement](https://www.anthropic.com/news/claude-opus-4-6), [Claude Opus 4.6 system card](https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf), [Artificial Analysis Opus 4.6](https://artificialanalysis.ai/models/claude-opus-4-6), and [BenchLM Opus 4.6](https://benchlm.ai/models/claude-opus-4-6) (page dated 2026-10-05, carrying the component rows quoted above), accessed 2026-10-05.

### Normalized scores (1–100)

- **Tool use: 92/100.** Cut from 93 on newly measured evidence. Strong: SWE-bench Verified 80.8–81.42%, MCP Atlas 62.7%, τ²-bench 84.8%, Claw-Eval 70.4%, OSWorld-Verified 72.7%, BrowseComp 83.7%. But ApprenticeBench at **5%** and ResearchClawBench at **19.9%** are near-floor, and AA-IFBench 44.6% is the lowest in this refresh — long-horizon GUI and computer-use work is a clear gap relative to its coding-agent strength.
- **Reasoning: 84/100.** Cut sharply from 90. GPQA 91.3% (vendor) and SuperGPQA 95% look excellent, but the independent measurements contradict the vendor framing: **CritPt 2.8%** (lowest compared), FrontierMath v2 Tier 4 **22.9%**, AA-HLE **19.1%** against the vendor's 53.0%, FrontierCode 1.1 at **26.9%**, and AA-Omniscience Hallucination Rate **80.1%**. The model is strong on broad knowledge and weak on hard frontier reasoning and calibrated reliability.
- **Context window: 98/100.** Anthropic verifies 1M input tokens, now backed by an independent AA-LCR 67.0% retrieval result — mid-pack, so the nominal tier is justified rather than exceeded.
- **Multimodal: 70/100.** Raised from 65 on measured evidence: MMMU-Pro 77.3% (vendor) / 72.5% (AA), ScreenSpot Pro 83.1%, MedXpertQA MM 64.8%, Design Arena Website 1298 Elo, ERQA 51.6%. Still capped — no audio or video input.
- **Coding: 92/100.** Held. SWE-bench Verified 80.8–81.42%, LiveCodeBench Pro 70.7%, SWE-Rebench 65.3%, SWE-bench Pro 53.4%, Vibe Code Bench 57.57%, React Native Evals 84.1%. FrontierCode 1.1 at 26.9% and the absence of DeepSWE/LiveCodeBench/SciCode figures keep it from the top.
- **Cost efficiency: 50/100.** The $5/$25 paid price is expensive; effort controls and context compaction can reduce realized cost.
- **Overall Score: 87.2/100.** (92 + 84 + 98 + 70 + 92) / 5 = 87.2, cost excluded. Best fit: demanding coding agents, research, and professional knowledge work with a 1M context where quality outweighs cost.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-10-05
- Method: Public web research of Anthropic's official announcement and system card, Artificial Analysis and BenchLM component leaderboards, Claw-Eval, SWE-Rebench, Vals AI, Cognition FrontierCode, Epoch AI FrontierMath and CyberGym; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall. Refreshed 2026-10-05 to replace the first pass's missing Tau3/LCR/CritPt/SciCode/Vibe-Code-Bench rows with measured values — a net downward correction driven by CritPt 2.8%, FrontierMath Tier 4 22.9%, AA-HLE 19.1% and FrontierCode 26.9%.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
