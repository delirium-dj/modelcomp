# Qwen3.7 Plus — findings by Space Bunny

- Source: Alibaba Qwen / Qwen3.7 Plus (`qwen3.7-plus`; thinking mode, max CoT 262,144)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Plus
- **Short description:** Alibaba's cost-effective multimodal agent model in the Qwen3.7 series — the Qwen 3.7 text backbone with a comprehensive vision-language upgrade, positioned at roughly **one sixth the per-token price of Qwen3.7-Max**. Its distinguishing feature is multi-modal interactive hybrid agent capability: perceive real-world scenes, read screens and drive GUIs, generate code from visual references, and navigate mobile apps end-to-end.
- **Provider / access:** Alibaba Cloud Model Studio (DashScope), endpoint `qwen3.7-plus`, OpenAI-compatible chat-completions and responses APIs across Beijing, Singapore, and US-Virginia regions; OpenRouter `qwen/qwen3.7-plus` and dated slug `qwen3.7-plus-20260602`. **Proprietary / API-only — no open weights.** OpenAI-compatible agent config lists `input: ["text"]`, 1,000,000 context, 65,536 maxTokens in the reference snippet, while OpenRouter lists text+image and the vendor docs list text/image/video — the discrepancy is flagged below.
- **Release / knowledge:** Preview from ~2026-05-14; announced **2026-06-02**, generally available 2026-06-01/03. Snapshot `qwen3.7-plus-2026-05-26` is documented as functionally equivalent to the rolling version. No public knowledge cutoff.
- **IDs:** `qwen3.7-plus`; `qwen3.7-plus-2026-05-26`; OpenRouter `qwen/qwen3.7-plus`.
- **Context window (official Model Studio limits — this corrects the prior pass):** Context window **1,000,000**; **Max Input Length 991,808**; **Max Output Length 131,072**; Max Input in thinking mode **983,616**; **Max Chain-of-Thought Length 262,144**. Note the conflict: OpenRouter's agent snippet lists `maxTokens: 65536` and AI/TLDR says 32,768, but Alibaba's own documentation is authoritative at **131,072**.
- **Modalities:** Text, **image, and video** input; **text output only** (no image or video generation). OpenRouter metadata lists only text+image for its route — a documented gap versus the vendor's video claim.
- **Pricing (official Model Studio, verified 2026-10-10 — materially more granular than the prior pass):**

  | Region / band | Input | Output | Implicit cache | Explicit cache read | Explicit cache create |
  | --- | --- | --- | --- | --- | --- |
  | Beijing, ≤256K | $0.276 | $1.101 | $0.056 | $0.028 | $0.344 |
  | Beijing, 256K–1M | $0.826 | $3.301 | $0.166 | $0.083 | $1.032 |
  | International, ≤256K | $0.40 | $1.60 | $0.08 | $0.04 | $0.50 |
  | International, 256K–1M | $1.20 | $4.80 | $0.24 | $0.12 | $1.50 |

  Batch file and batch chat run at roughly half the metered rate. **Thinking-mode output bills higher (~$4/1M up to 256K).** OpenRouter lists $0.32 / $1.28 with $0.064 cache read at 43–47 tps and ~1.05s latency.
- **Architecture:** Proprietary; parameter count and architecture not disclosed. Extends the text-only Qwen 3.7 backbone (itself hybrid linear attention + sparse MoE routing) with image/video understanding.

### Raw benchmarks found

**Official — Alibaba Cloud "Qwen3.7-Plus: Multimodal Agent Intelligence" (2026-06-03):**

Coding:

- Terminal-Bench 2.0: **70.3%** (Harbor/Terminus-2, 5h timeout, 256K context, max_tokens 80K, temp 1.0 / top_p 0.95 / top_k 20, avg of 5 runs)
- SWE-bench Verified: **77.7%** (internal agent scaffold, bash + file-edit tools, 200K context)
- SWE-bench Pro: **57.6%** (problematic tasks corrected, all baselines re-run on the refined benchmark)
- SWE Multilingual: **75.8%**
- NL2Repo: **41.1%**
- SciCode: **51.3%**

Agent / tool use:

- MCP Atlas: **73.2%** (public set, gemini-2.5-pro as judger)
- BFCL v4: **72.9%**
- Claw-Eval: **62.7%**; QwenClawBench: **61.8%**; DeepPlanning: **62.3%**; QwenWebBench: **1536** Elo

Computer use / multimodal agent:

- OSWorld-Verified: **73.3%**
- AndroidWorld: **81.0%**
- ScreenSpot Pro (GUI grounding): **79.0%**
- VITA-Bench: **45.6%** (claude-4.5-sonnet as judger)

Reasoning / knowledge:

- GPQA Diamond: **90.3%**
- MMLU-Pro: **88.5%**; MMLU-Redux: **94.5%**; SuperGPQA: **71.4%** (ranked #4 of 100 on Model Beats); MMMLU: **89.0%**
- HLE: **34.7%**

**Independent — Artificial Analysis:**

- Intelligence Index **25.2**; Coding Index **55.9**; Agentic Index **17.5** (BenchLM lists 19.7)
- GPQA Diamond **90.0%**; HLE **35.6%**; IFBench **78.0%**; τ²-Bench Telecom **93.0%**; AA-LCR **73.0%**
- **τ-Bench Banking 17.5%**; GDPval-AA **13.5%** (886 Elo); CritPt **9.1%**; APEX-Agents-AA **22.4%**
- SciCode **46.1%**; Terminal-Bench Hard **47.0%**; Terminal-Bench 2.1 (AA) **61.0%**; **Terminal-Bench 4.0: 1.0%**
- AA-Omniscience: Index **1.1**, Accuracy **22.5%**, Non-Hallucination Rate **72.3%**, Hallucination Rate **27.7%**

**Independent — Vals AI:**

- **Vals Index 52.3%**; **Vals Multimodal Index 53.9%**
- **Terminal-Bench 2.1: 52.8%**
- Vibe Code Bench v1.1 **46.4%**; SkillsBench **54.3%**; EMB **49.3%**; Finance Agent v2 **38.2%**; SAGE **39.3%**; Legal Research Bench **16.3%**; Tax Agent Bench **10.5%**; Code Migration **12.9%**; MortgageTax **66.2%**; **Harvey's Legal Agent Benchmark 0.0%**

**Independent — other:**

- **OSWorld 2.0: 2.8%** (OSWorld 2.0 paper) — a near-total failure on the current computer-use harness, against Alibaba's own OSWorld-Verified 73.3%
- DeepSWE: **14.2%** (rank #18 of 52)
- LiveCodeBench v6 **89.6%** — published on the Qwen3.8-27B model card's comparison table, not Qwen3.7-Plus's own

**Conflicts retained, not averaged:**
- **Terminal-Bench: 70.3% (Alibaba, 2.0 harness) / 61.0% (AA, 2.1) / 52.8% (Vals, 2.1)** — a 17.5-point spread on essentially the same task family, entirely harness-driven.
- **OSWorld: 73.3% (Alibaba, Verified) vs. 2.8% (OSWorld 2.0)** — the newer harness is not a gentle increment.
- **Max output: 131,072 (Alibaba docs) vs. 65,536 (OpenRouter config snippet) / 32,768 (AI/TLDR)** — vendor documentation used.
- **Video input:** claimed by Alibaba, not listed by OpenRouter for its route.

Sources consulted: [Qwen3.7-Plus launch benchmarks (Alibaba Cloud Blog, 2026-06-03)](https://www.alibabacloud.com/blog/qwen3-7-plus-multimodal-agent-intelligence_603206), [qwen3.7-plus Model Info (Alibaba Cloud Model Studio docs)](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-plus), [Qwen3.7 Plus on OpenRouter](https://openrouter.ai/qwen/qwen3.7-plus), [BenchLM Qwen3.7 Plus](https://benchlm.ai/models/qwen3-7-plus), [Model Beats Qwen3.7-Plus](https://modelbeats.com/models/qwen3-7-plus), [AI/TLDR Qwen3.7-Plus specs](https://ai-tldr.dev/models/qwen3-7-plus/), and [Benchgen Qwen3.7 Plus](https://benchgen.com/models/alibaba/qwen3-7-plus), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 86/100.** Raised from 83. The prior pass had only Tau2 Telecom 93.0% and IFBench 78.0%; the vendor launch table adds **MCP Atlas 73.2%**, **BFCL v4 72.9%**, **Claw-Eval 62.7%**, **QwenClawBench 61.8%**, **DeepPlanning 62.3%**, and **QwenWebBench 1536 Elo**. Capped well below the top band by the independent rows: **Terminal-Bench 4.0 at 1.0%**, **APEX-Agents-AA 22.4%**, **τ-Bench Banking 17.5%**, **GDPval-AA 13.5%**, **Vals' Harvey's Legal Agent Benchmark at 0.0%**, and Vals' Terminal-Bench 2.1 at 52.8%. Qwen3.7-Plus is strong on the agent benchmarks Alibaba chose and weak on the ones it did not.
- **Reasoning: 84/100.** Raised from 82. GPQA Diamond **90.3%** (AA independently 90.0%), MMLU-Pro **88.5%**, MMLU-Redux **94.5%**, MMMLU **89.0%**, and **SuperGPQA 71.4%** (a #4-of-100 placement) are Plus-tier leaders on hard STEM. Held below the high 80s by **HLE 34.7%**, **CritPt 9.1%**, an **AA-Omniscience Index of 1.1** with only 22.5% accuracy, and an **Intelligence Index of 25.2** that leaves it mid-pack on the composite that matters most for long-horizon work.
- **Context window: 97/100.** Slightly reduced from 98. Now fully specified and materially larger than the prior pass recorded: **991,808 max input, 131,072 max output, 262,144 max chain-of-thought** inside a 1,000,000 window, with **AA-LCR at 73.0%** as independent retrieval evidence. Deducted for the **pricing cliff** — the 256K–1M band costs roughly 3× the ≤256K band ($0.826/$3.301 in Beijing, $1.20/$4.80 internationally), which means the headline context is cheap only for the first quarter of it.
- **Multimodal: 82/100.** Raised from 65 — the largest correction in this report. The prior pass recorded no visual benchmark because the vendor table had not been read. Alibaba now publishes a complete interactive-agent vision suite: **ScreenSpot Pro 79.0%**, **AndroidWorld 81.0%**, **OSWorld-Verified 73.3%**, plus **VITA-Bench 45.6%** and an independent **Vals Multimodal Index of 53.9%**. **Video input is native**, not just image. Held at 82 by two real problems: **OSWorld 2.0 at 2.8%** on the current harness, and VITA-Bench at 45.6% — visual *understanding* trails visual *control* by a wide margin. OpenRouter's route also does not advertise video, so treat the video claim as region- and vendor-dependent.
- **Coding: 82/100.** Raised from 77. The prior pass had "no exact public SWE-bench score found"; Alibaba publishes **SWE-bench Verified 77.7%**, **SWE-bench Pro 57.6%**, and **SWE Multilingual 75.8%** — Pro in particular is competitive with far more expensive peers. Terminal-Bench 2.0 **70.3%** and SciCode **51.3%** support it. Deducted for **DeepSWE at 14.2%** (long-horizon software engineering is the model's real weakness), **Vals Terminal-Bench 2.1 at 52.8%**, **Code Migration at 12.9%**, and **Vibe Code Bench at 46.4%**. This is competent repo-level work, not frontier long-horizon agency.
- **Cost efficiency: 85/100.** Reduced from 89. At **$0.40 / $1.60** internationally (Beijing is cheaper at $0.276 / $1.101) with explicit cache reads at $0.04 and batch at roughly half, this is genuinely inexpensive for a 1M-context multimodal model — around one sixth of Qwen3.7-Max. Two real deductions: **the 256K band jump triples both input and output**, which is exactly where 1M-context agents live; and **thinking-mode output bills roughly 2.5× higher**, so a reasoning-heavy workload does not see the headline rate.
- **Overall Score: 86.2/100.** (86 + 84 + 97 + 82 + 82) / 5 = 431 / 5 = 86.2, up from 81.0. The prior pass materially under-scored this model because it was working from aggregator data rather than Alibaba's own launch table. **Best fit:** GUI and mobile agents, screen-reading workflows, and multilingual knowledge work where per-token cost dominates — the ScreenSpot Pro 79.0 / AndroidWorld 81.0 pair is genuinely strong for the price. **Do not use it for long-horizon software engineering** (DeepSWE 14.2%) or legal/financial agent work (Harvey's Legal Agent 0.0%, Tax Agent Bench 10.5%).

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Alibaba Cloud's official Qwen3.7-Plus launch benchmark post and Model Studio model documentation, plus Artificial Analysis, Vals AI, the OSWorld 2.0 paper, OpenRouter route metadata, and independent trackers; scores are normalized 1–100 interpretations, not official vendor scores. Vendor and independent rows are kept separate throughout, and the harness disagreement is explicit wherever both exist. Cost efficiency is excluded from Overall.
- Audit note: three conflicts are retained rather than reconciled — Terminal-Bench (70.3 / 61.0 / 52.8), OSWorld (73.3 Verified vs. 2.8 on OSWorld 2.0), and max output (131,072 official vs. 65,536 / 32,768 on third-party configs). Vendor documentation was preferred on the output limit.
- Future sources: add a new file next to this one, e.g. `Qwen_3_7_Plus_Recheck.md`, using the same headings.