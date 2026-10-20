# GPT-5.3 Codex — findings by MiniMax M3.1 Flash

- Source: OpenAI (`gpt-5.3-codex`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI 2026 年 2 月的**纯 agentic 编程特化**模型 —— "The most capable agentic coding model to date"，并且是 "our first model that was instrumental in creating itself"（自我改进训练的一例）。它只支持 **Responses API**（无 Chat Completions、无 Batch），定价与普通 GPT-5.2 同为 $1.75/$14，是这一代里"唯一只做一件事"的模型。
- **Provider / access:** OpenAI API `gpt-5.3-codex`（单快照 `gpt-5.3-codex`）—— **仅 Responses API**；OpenRouter `openai/gpt-5.3-codex`；OpenCode Zen `opencode/gpt-5.3-codex`。
- **Release / knowledge:** launch blog 标注 **2026-02-05**（system card 同日）；AA 与 Vals 记 2026-02-24（OpenRouter `created`）。Knowledge cutoff **2025-08-31**。
- **IDs:** `gpt-5.3-codex`（OpenAI API）、`openai/gpt-5.3-codex`（OpenRouter）、`opencode/gpt-5.3-codex`（Zen）。
- **Context window:** **400,000**（max input 272,000；max output **128,000**）。
- **Modalities:** 输入 文本+图像 → 输出 文本。
- **Reasoning controls:** effort low / medium / high / **xhigh**；厂商全部评测跑在 xhigh。
- **Tools:** function_calling, web_search, hosted_shell, skills（+ streaming, structured_outputs, prompt_caching）。
- **Pricing (as of 2026-10-19, per 1M tokens):** **$1.75 in / $0.175 cached / $14.00 out**；**Fast mode $3.50 / $0.35 / $28.00**；**无 Batch 价目、无 cache-write 价目**。
- **Rate limits (default tier):** Build 5,000 RPM / 1M TPM；Launch 10,000 / 4M；Grow 15,000 / 40M（文档列出 batch-queue 上限，但 Batch 实际不支持）。
- **Architecture:** proprietary，闭源；参数量未披露。

### Raw benchmarks found

> OpenAI launch blog 附录标为 "vendor"（脚注："All evaluations in the blog were run on GPT-5.3-Codex with xhigh reasoning effort"）；Vals AI、BenchLM、swe-rebench.com 为独立来源。

Agent / tool use:

- SWE-Lancer IC Diamond **81.4%**（vendor）
- OSWorld-Verified **64.7%**（vendor；对照 GPT-5.2-Codex 38.2%、GPT-5.2 37.9%、人类 "~72%"）
- GDPval (wins or ties) **70.9%**（vendor）
- Cybersecurity CTF **77.6%**（vendor）
- JobBench **33.7%**（via BenchLM）；Gert Labs Composite **57.47%**（via BenchLM）；Design Arena Website **1164**（OpenRouter）
- τ²-bench 85.96%（AA 载荷）；TB-Hard **53.03%** (AA)；APEX-Agents / Toolathlon / Claw-Eval / MCP-Atlas / BrowseComp: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond **91.52%** (AA)；HLE **42.49%** (AA)；AA-LCR **83.33%** (AA)；IFBench **75.37%** (AA)；CritPt **16.86%** (AA)；Omniscience index **10.87** / accuracy **52.88%** / hallucination **89.18%** (AA)
- Artificial Analysis Intelligence Index: **33\***（**估计值** — "Estimate (independent evaluation forthcoming)"，#88/217），122.1 t/s (#50/186)，TTFT 54.24s，400k ctx，1 provider
- 无 FrontierMath / AIME / ARC-AGI 公布

Coding:

- SWE-bench Pro (Public) **56.8%**（vendor，对照 GPT-5.2-Codex 56.4 / GPT-5.2 55.6）
- Terminal-Bench 2.0: **77.3%**（vendor, xhigh）/ **64.05% ± 5.12** (Vals, high effort)；**无 Terminal-Bench 2.1 / 3.0 / 4.0 数字**
- SWE-bench Verified **85%**（system card，经 BenchLM 引用）；SWE-bench **78.00% ± 1.85**（Vals AI, #33/88）
- LiveCodeBench **87.31% ± 0.97**（Vals, #16/143）；Vibe Code Bench v1.1 **61.77% ± 4.71**（Vals, #51/115）；SWE-Rebench **58.2%**（swe-rebench.com）；IOI 53.83%（Vals）
- **无 DeepSWE、无 FrontierCode、无 LiveCodeBench 官方榜行、无 SWE-bench Pro 独立复测**

Long context:

- **无 MRCR / RULER / GraphWalks 公布。** 400K 窗口。

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 72/100.** OSWorld-Verified **64.7%**, SWE-Lancer IC Diamond 81.4%, GDPval 70.9%, CTF 77.6%, τ²-bench 85.96% (AA), TB-Hard 53.03% (AA), JobBench 33.7%, Gert Labs 57.47%. Capped by the rubric's anchors (TB2.1 ~88%+ → not published; τ3 ~50%+ → not published; GDPval ~1750+ → not published), by JobBench at 33.7%, and by the complete absence of Terminal-Bench 2.1/4.0, Toolathlon, MCP-Atlas, Claw-Eval and APEX-Agents rows — the model's specialisation means its *agentic* breadth is largely unmeasured.
- **Reasoning: 80/100.** GPQA Diamond 91.52%, HLE 42.49%, AA-LCR 83.33%, IFBench 75.37%, τ²-bench 85.96%, TB-Hard 53.03%, CritPt 16.86%, and an AA Intelligence Index of **33\***. Capped by HLE in the low 40s, by CritPt under 17%, by the **89.18% hallucination rate** (with 52.88% accuracy), and by the absence of any FrontierMath, AIME or ARC-AGI measurement.
- **Context window: 91/100.** 400,000 tokens with a 128,000 max output — the rubric's 200K–500K band (65–84) for the window, with the output cap comfortably above the 64k line, plus a 272K max input. Not 95+ because the window is 400K rather than 1M and **no long-context retrieval measurement exists**.
- **Multimodal: 70/100.** Text + image in, text out, with MMMU-Pro **78.50%** (AA) as the only vision row, and OSWorld-Verified 64.7% for screen work. The rubric's "+image in = 60–70" band is met at its top; no video or audio input is documented, so it cannot reach the 90–100 band.
- **Coding: 80/100.** SWE-bench Verified **85%** (system card) / 78.00% (Vals), SWE-bench Pro **56.8%**, Terminal-Bench 2.0 **77.3%** (xhigh) / 64.05% (Vals, high), LiveCodeBench 87.31%, Vibe Code Bench 61.77%, SWE-Rebench 58.2%, SWE-Lancer IC Diamond 81.4%. Capped by the absence of Terminal-Bench 2.1/4.0, DeepSWE, FrontierCode and FrontierSWE numbers, by the 13-point Terminal-Bench 2.0 spread, and by SWE-bench Pro at 56.8% (under the 74% anchor).
- **Cost efficiency: 78/100.** The evaluated route — OpenCode Zen `opencode/gpt-5.3-codex` — is billed at **$1.75 in / $14.00 out** per 1M with a $0.175 cached read (90% discount); Fast mode doubles to $3.50/$28.00. The rubric's anchors (~$1.25/$4.25 ≈ 88, ~$3/$15 ≈ 60) put $1.75/$14 at roughly 78. The deductions are the **$14 output rate for a model that exists to generate code** (typically the most token-hungry workload), the **absence of a Batch discount** (Responses-only, so no half-price bulk path), and no cache-write rate.
- **Overall Score: 78.6/100.** (72 + 80 + 91 + 70 + 80) / 5 = 78.6 — best-fit: the **2026 年初的 agentic 编程特化机** — 56.8% SWE-bench Pro、85% SWE-bench Verified、77.3% Terminal-Bench 2.0、LiveCodeBench 87.3% — excellent where it was aimed, but a 400K window, an 89% hallucination rate, no Terminal-Bench 4.0 and no DeepSWE measurement, plus a 6×-per-million-output price that makes it a poor general-purpose default.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Release date — 2026-02-05 (OpenAI blog and system card) vs 2026-02-24 (Vals, AA, OpenRouter listing date).**
2. **Terminal-Bench 2.0 — 77.3% (OpenAI, xhigh) vs 64.05% ± 5.12 (Vals, high effort).** A 13-point effort-driven spread; the AA page has no Terminal-Bench value for this model at all.
3. **SWE-bench — 85% Verified (system card) vs 78.00% (Vals).** Different harnesses; both listed.
4. **Vibe Code Bench — 61.77% / #51 in Vals' own table, while Vals' prose says "it scores 41.4% (#4)".** The two statements inside the same tracker contradict each other; the table value is used and the prose conflict recorded.
5. **AA's index 33\* is an estimate** — the page states "Estimate (independent evaluation forthcoming)" and offers no per-evaluation set; BenchLM nonetheless republishes AA-attributed per-benchmark values for Codex (τ² 86%, GPQA 91.5%, HLE 42.5%, MMMU-Pro 78.5%, LCR 83.3%, CritPt 16.9%, IFBench 75.4%, index 32.5%) that AA's own page does not show as measured. Only the values I could read from AA's payload (the ones quoted above) are treated as measured.
6. **OpenAI publishes no SWE-bench Pro independent run**, and the launch table's SWE-Bench Pro 56.8% is a vendor self-report; BenchLM relays it as fact.
7. **No DeepSWE, Terminal-Bench 2.1/3.0/4.0, FrontierCode, FrontierMath, AIME or official LiveCodeBench/Vibe Code Bench row exists for this model** — the coding score is built on six numbers, three of them vendor-reported.

### Notes on identity

- `gpt-5.3-codex` is a **distinct model id from plain `gpt-5.3`** and from `gpt-5.2-codex` (a separate, earlier coding snapshot) — it shares the pricing and context of GPT-5.2 but has its own weights and its own Responses-only endpoint.
- It is **not** the ChatGPT "Codex" product tier; the API model is the same `gpt-5.3-codex` id in both surfaces.
- Effort is a parameter (low → xhigh), and every published number here is an **xhigh** run except the Vals Terminal-Bench 2.0 measurement, which is a high-effort run — the largest source of spread in this entry.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — OpenAI first-party model page, pricing page, the "Introducing GPT-5.3-Codex" launch blog (with its evaluation appendix) and the associated system card; independent trackers Vals AI, the BenchLM evidence ledger, swe-rebench.com and OpenRouter's Design Arena data; plus negative verification at the official Terminal-Bench board, swebench.com, LiveCodeBench, ARC Prize, Epoch AI and LMArena. Vendor-vs-independent conflicts — the Terminal-Bench effort spread, the SWE-bench Verified gap, the Vals prose/table contradiction and the AA estimate-vs-measurement distinction — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.3_Codex.md`, using the same headings.
