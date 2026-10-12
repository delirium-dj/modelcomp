# GPT-5.6 Terra — findings by Muse Spark 1.3 Contributor

- Source: OpenAI/GPT-5.6 Terra, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-12 (UTC) — second-pass refresh (prior Signature 2026-09-18, amended 2026-09-27: Sol contamination removed, 90 → 87; new: AA Terra-max model page composite + speed + blended cost, July 9 release confirmation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra (OpenAI flagship 5.6 generation)
- **Short description:** OpenAI's flagship 5.6 generation model optimized for ground-up agentic research, tool usage, long-context reasoning, and code synthesis.
- **Provider / access:** OpenAI via API + Codex (`openai/gpt-5.6-terra`); no Zen Free ID (Chat Completions + Responses API, tool calling + MCP).
- **Release / knowledge:** 2026-07-09 release (AA Terra-max model page; 5.6 family GA); knowledge cutoff Feb 2026 (family docs, amended 2026-09-27).
- **IDs:** `openai/gpt-5.6-terra` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1M (AA Terra-max model page, Oct 2026) / 128K out — filed 1.05M figure was the OpenAI catalog family-level max; AA lists the Terra-max lane at 1.0M (amended 2026-09-27, reconciled 2026-10-12).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes (OpenAI catalog; corrects filed audio/video/PDF claim)
- **Pricing (as of 2026-10-12):** $2/$12 per 1M after 20% cut (was $2.50/$15); AA blended 7:2:1 ≈ $1.74/1M, $1.40 per Index task (#69/219); no Zen Free ID
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

> Compared against prior findings (2026-09-18/27, Overall 87): new verified evidence below — AA Terra-max model page (Index 42 composite, 123.1 tok/s speed, $1.74 blended, July 9 release). Gaps closed: AA Intelligence Index composite, output speed; context reconciled to 1M lane. Prior "no Terra-specific AA Index found" superseded.

Agent / tool use:

- Terminal-Bench 2.0: **87.4%** (BenchLM public snapshot, #3 behind Sol 91.9% and Mythos 5 88.0%)
- Terminal-Bench 2.1 (Vals): **77.5%** (BenchLM mirror); **Terminal-Bench 3.0 20.8%** (BenchLM mirror)
- BrowseComp: **87.5%** (BenchLM mirror)
- OSWorld 2.0: **50.2%** (BenchLM mirror)
- CyberGym: **81.8%** (BenchLM mirror); **ExploitGym 23.2%** (BenchLM mirror)
- Toolathlon: **53.1%** (BenchLM mirror)
- GDPval-AA: **no verified Terra-specific score found** (filed 1730 Elo was Sol's — removed as cross-model contamination)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (BenchLM mirror; beats GPT-5.2 in shared lane)
- ARC-AGI-2: **83.9%** (BenchLM mirror); **ARC-AGI-3 0.8%** (BenchLM mirror — weak tail)
- FrontierMath: **84.9% Tiers 1–3 / 68.3% Tier 4** (BenchLM mirror)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **42** (AA Terra-max reasoning model page, Oct 2026 — NEW, closes prior gap; #49/219, class median 27; v4.3.2 covers GDPval-AA v2.1, TB4.0, SciCode, HLE, CritPt, Omniscience, LCR)
- AA model-page speed/cost context (NEW): **123.1 output tok/s** (#41/219, class median 83.8 — notably fast); TTFT 149.29s (high)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (Index composition confirms Omniscience is measured for this lane, but AA publishes no Terra-specific absolute)

Coding:

- SWE-bench Verified / SWE-Pro: **95.4% SWE-bench Vals** (BenchLM mirror); **63.4% SWE-bench Pro** (BenchLM mirror)
- LiveCodeBench: **85.9% LiveCodeBench Vals** (BenchLM mirror)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **69.6% DeepSWE** (BenchLM mirror; llm-stats 0.700 #5); **55.8% FrontierCode 1.1 Extended** (BenchLM mirror); **64.9% cursorBench32** and **87.0% VulcanBench v3** (BenchLM mirrors; filed Sol-lane 72%/55 removed)

Long context:

- **1M lane verified (AA Terra-max page; family catalog max 1.05M); no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.0 87.4% (#3) plus BrowseComp 87.5% and CyberGym 81.8% show strong balanced-tier orchestration; capped by Toolathlon 53.1%, OSWorld 50.2% and no Tau3/GDPval/Claw numbers.
- **Reasoning: 90/100.** GPQA 92.9% plus ARC-AGI-2 83.9% and FrontierMath T1–3 84.9% show strong balanced-tier reasoning, now anchored by AA Index 42 (#49/219, above class median 27); capped by the ARC-AGI-3 0.8% tail and no absolute HLE/LCR/CritPt numbers.
- **Context window: 100/100.** 1M lane / 128K out verified; top tier.
- **Multimodal: 68/100.** Text + image in only (AA confirms text/image in, text out), capped in the image-in tier.
- **Coding: 90/100.** SWE Vals 95.4% plus LiveCode 85.9%, VulcanBench 87.0% and DeepSWE 69.6% show elite balanced-tier engineering; capped by SWE-Pro 63.4% and no SciCode/Vibe numbers.
- **Cost efficiency: 58/100.** $2/$12 headline (blended ≈ $1.74/1M, $1.40 per Index task) with fast 123.1 tok/s output — solid mid-tier paid value (revised up from 55: speed evidence is new and positive).
- **Overall Score: 87/100.** Mean of the five non-cost dims (87+90+100+68+90)/5 = 87.0; best-fit balanced OpenAI tier below Sol — Sol-contaminated rows now replaced with Terra absolutes.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-12
- Method: second-pass refresh of the 2026-09-18 report (amended 2026-09-27): fresh public internet research (AA Terra-max reasoning model page for Index 42, 123.1 tok/s speed, $1.74 blended cost and July 9 release; BenchLM absolutes retained); context reconciled to 1M lane; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
