# Kimi K3.1 Pro — findings by Beam

- Source: Moonshot AI / Kimi K3.1 Pro (kimi-k3.1-pro)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's post-trained flagship (released 2026-10-23), a 2.8T/104B-active MoE building on Kimi K3 with much more RL; open weights promised by 2026-11-04. Strong on coding, agentic, and knowledge work at 1M context.
- **Provider / access:** Moonshot AI API (`moonshot/kimi-k3-1-pro`); Kimi apps, Kimi Work, Kimi Code. Chat Completions (OpenAI-compatible); thinking mode only.
- **Release / knowledge:** 2026-10-23; knowledge cutoff not disclosed (weights pending release).
- **IDs:** `kimi-k3.1-pro` (Moonshot); `moonshot/kimi-k3-1-pro` (gateway alias).
- **Context window:** 1,048,576 tokens total; up to 1,048,576 max output (verified via Moonshot docs/aimlapi).
- **Modalities:** text, image in; text out; reasoning yes (thinking-only); tool calls yes (parallel); JSON/structured output yes.
- **Pricing (as of 2026-10-29):** $2.00 / $0.20 cached / $10.00 per 1M in/cached/out.
- **Architecture:** MoE, 2.8T total / 104B active; open weights (release by 2026-11-04); license pending.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **65.7%** (Moonshot; Vals AI #3 of 57)
- SWE-Marathon v1.1: **51.7** (Moonshot, #1 in its row)
- Agents' Last Exam: **43.2** (Moonshot, #1)
- AutomationBench-AA: **73.3%** (Moonshot, lead)
- OfficeQA Pro v2: **64.4** (Moonshot, #1)
- BrowseComp: **92.1** (Moonshot, #1)
- GDP.pdf: **34.6** (Moonshot, #1)
- OSWorld V2.1: reported lead over GPT-5.6 Terra-class (Moonshot)
- ZeroBench (with tools): **63.0** (Moonshot)
- Kimi Code Bench 3.0 Long-horizon: **61.2%** (up from K3 55.95%; behind GPT-6 Astra 66.5)

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (99th percentile, rank 7/478) (BenchmarkList)
- HLE (with tools): **70.0** (Moonshot, #1)
- HLE (without tools): trails GPT-6 Astra/Claude (Moonshot)
- PerceptionBench: **68.3%** (BenchmarkList)
- Vals Index v2.2: **62.52%** (#8 of 27; top open-weights) (Vals AI)
- Factual-error stress test: **8.3%** false claims (down from K3 23.4%) (Moonshot/TNW)
- Internal finance: Financial Modeling 57.6 (up 7.2), Financial Research 70.4 (up 11.6), Business Operation 37.0 (up 28.1) (Moonshot)

Coding:

- Terminal-Bench 4.0: **65.7%** (Moonshot)
- DeepSWE v1.1: lead over proprietary peers (Moonshot)
- Kimi Code Bench 3.0 Long-horizon: **61.2%** (Moonshot)
- BenchCAD (with tools): **92.7%** (Moonshot)

Long context:

- 1M-token context; AA-LCR not separately published.

### Normalized scores (1–100)

- **Tool use: 92/100.** Strong agentic/computer-use and professional-work numbers (TB4.0 65.7%, AutomationBench 73.3%, Agents' Last Exam 43.2, BrowseComp 92.1, OfficeQA 64.4, GDP.pdf 34.6); capped slightly by Kimi Code Bench 61.2 vs Astra 66.5.
- **Reasoning: 93/100.** GPQA 94.2%, HLE-with-tools 70.0, Vals Index 62.52% (top open-weights), and much lower factual-error rate (8.3%); capped by HLE-without-tools trailing GPT/Claude.
- **Context window: 100/100.** 1M-token window.
- **Multimodal: 75/100.** Text + image input with text output; no audio/video.
- **Coding: 90/100.** TB4.0 65.7%, DeepSWE lead, Kimi Code Bench 61.2, BenchCAD 92.7; capped by gap to Astra on Kimi's own long-horizon bench.
- **Cost efficiency: 80/100.** $2/$0.20-cached/$10 per 1M — mid-priced, cheaper than K3 and Claude/GPT frontier tiers, but not bargain-priced.
- **Overall Score: 90/100.** (92+93+100+75+90)/5 = 90; best fit for open-weights agentic coding and long-horizon knowledge work, pending weight release.

---

## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-10-29
- Method: public internet research (Moonshot launch blog, Artificial Analysis/BenchmarkList, independent reviews); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
