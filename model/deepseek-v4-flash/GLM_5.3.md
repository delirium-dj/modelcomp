# DeepSeek V4 Flash — findings by GLM 5.3

- Source: DeepSeek (`deepseek-v4-flash`, 0731 snapshot)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash (0731)
- **Short description:** DeepSeek's fast-tier V4 reasoning model — a 1M-context agentic coder with elite competitive-coding scores at flash pricing (successor: V4.1 Flash; a separate V4 Flash Vision Exp covers image input). Top use case: high-volume agentic coding and browsing at minimal cost.
- **Provider / access:** OpenCode Zen `opencode/deepseek-v4-flash` (OpenAI-compatible Chat Completions); DeepSeek API; BenchLM lists the 0731 snapshot (also hosted on DeepInfra).
- **Release / knowledge:** 0731 snapshot (July 31, 2026 naming); knowledge cutoff not stated publicly.
- **IDs:** `opencode/deepseek-v4-flash` (no Free ID on Zen; paid tier).
- **Context window:** 1M tokens (BenchLM model page).
- **Modalities:** text in / text out on this base ID (image input lives on the separate `deepseek-v4-flash-vision-exp`); reasoning yes; tool calls yes (MCP/agent rows on BenchLM); JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** $0.14 in / $0.28 out per 1M, cached read $0.028 (OpenCode Zen pricing table).
- **Architecture:** parameters undisclosed in the sources found (BenchLM lists Proprietary for the API snapshot; hosting on DeepInfra suggests open-weight availability — unverified here).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.7%** (BenchLM; Vals variant 67.0%); Terminal-Bench 2.0: **56.9%** (BenchLM)
- MCP Atlas: **69%** (BenchLM)
- Toolathlon-Verified: **70.3%** (BenchLM); Toolathlon **47.8%** (BenchLM)
- GDPval-AA: **1189 Elo** (BenchLM; normalized field 46.3%)
- BrowseComp: **73.2%** (BenchLM)
- AA Agentic Index: **41.7%** (BenchLM)
- Agents' Last Exam **25.2%**, AutomationBench **25.1%** (BenchLM)
- CyberGym: **76.7%** (BenchLM)
- Claw-Eval / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (BenchLM; AA-GPQA 90.8%, Vals 89.9%)
- HLE: **34.8%** (BenchLM; AA-HLE 38.6%; with-tools 45.1% — above the 40% frontier reference)
- LCR / MLCR: AA-LCR **79.7%** (BenchLM); MLCR no verified public score found
- CritPt: **16.6%** (BenchLM)
- ARC-AGI-1 **89.0%**, ARC-AGI-2 **61.4%** (BenchLM)
- Artificial Analysis Intelligence Index: **34.3** (BenchLM)
- Omniscience: Index **-14.3**, Accuracy **40.4%**, hallucination-rate field **91.7%** (BenchLM; label ambiguous vs AA's "Non-Hallucination Rate" — flagged, not double-counted)
- MMLU-Pro **86.2%**, HMMT Feb 2026 **94.8%**, IMOAnswerBench **88.4%**, Apex **33.0%** (BenchLM)

Coding:

- SWE-bench Verified: **79%** (BenchLM); SWE-bench (Vals) **88.8%** (BenchLM)
- LiveCodeBench Pass@1-COT: **91.6%** (BenchLM; Vals 87.3%)
- Codeforces: **3052** (BenchLM)
- Terminal-Bench 2.1: **82.7%** (BenchLM)
- DeepSWE **54.4%**, SWE-bench Pro **52.6%**, SWE Multilingual **73.3%**, NL2Repo **54.2%**, AA-SciCode **50.3%**, VulcanBench v3 **88.4%**, OpenHarmony **53.8%**, DSBench-FullStack **68.7%** (BenchLM)
- AA Coding Index: **69.1%** (BenchLM)
- Design Arena Website Elo: **1219** (BenchLM)
- Vibe Code Bench: **no verified public score found**

Long context:

- **MRCR 1M 78.7%** and **CorpusQA 1M 60.5%** (BenchLM) at the 1M window — verified long-context retrieval-class evidence; AA-LCR 79.7%.

### Normalized scores (1–100)

- **Tool use: 76/100.** TB 2.1 82.7%, Toolathlon-Verified 70.3%, MCP Atlas 69% and BrowseComp 73.2% are strong; GDPval-AA 1189 is mid-band and AutomationBench 25.1% with ALE 25.2% cap it below the frontier agents.
- **Reasoning: 80/100.** GPQA up to 90.8% (AA) and HLE-with-tools 45.1% clear or near the frontier lines, with HMMT 94.8% elite; CritPt 16.6%, a -14.3 Omniscience Index and AA Index 34.3 keep it under 85.
- **Context window: 95/100.** 1M with directly measured long-context evidence (MRCR 1M 78.7%, CorpusQA 1M 60.5%) — strong but below the ≥98% retrieval that would score 100.
- **Multimodal: 15/100.** Text in/out only on this ID (per template: 15 if text-only; vision lives on the separate Vision Exp variant).
- **Coding: 78/100.** SWE-bench Verified 79% / Vals 88.8%, LiveCodeBench 91.6%, Codeforces 3052 and TB 2.1 82.7% are excellent for the price tier; DeepSWE 54.4%, SWE Pro 52.6% and AA Coding Index 69.1% sit below frontier agentic coding.
- **Cost efficiency: 95/100.** $0.14/$0.28 per 1M with $0.028 cached reads sits between the ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (~92) anchors, close to the former.
- **Overall Score: 69/100.** Half-up mean of the five quality dims (76+80+95+15+78)/5 = 68.8 — the best coding-per-dollar found in the paid tier; its ceiling is text-only I/O and mid-band agentic breadth.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (BenchLM, OpenCode Zen pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
