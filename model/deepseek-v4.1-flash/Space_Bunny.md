# DeepSeek V4.1 Flash — findings by Space Bunny

- Source: DeepSeek (`deepseek-flash`; reasoning effort `low` / `high` / `max`, max by default for benchmarks)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's current production model — a 552B-parameter multimodal MoE on a new **Causal Encoder-Decoder** architecture, released 2026-09-10. Native image understanding, 1M context, and MIT-licensed weights at roughly one quarter the price of DeepSeek's own V4 Pro. Its KV-cache engineering is the headline: ~1/4 the HBM and ~1/8 the SSD footprint of V4-Flash, which is why long agent traces get cheap rather than merely cheap-listed.
- **Provider / access:** DeepSeek API (`deepseek-flash` is the canonical name); OpenAI- and Anthropic-compatible endpoints; **22 API providers** benchmarked by Artificial Analysis. Weights: `deepseek-ai/DeepSeek-V4.1-Flash` (MIT, ungated).
- **Release / knowledge:** Released 2026-09-10 (API pricing effective 04:00 UTC that day). Pre-trained from scratch on a **45T-token multimodal corpus**, with sparse attention trained at 64K sequence length and context extended to 1M at 34T tokens. No public knowledge cutoff.
- **IDs:** `deepseek-ai/DeepSeek-V4.1-Flash`; API route `deepseek-flash`; legacy alias `deepseek-v4.1-flash`.
- **Lifecycle:** **Active and current.** Related lifecycle facts: **V4 Flash and V4 Flash Vision Exp are retired**, with `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` *temporarily* routed to V4.1 Flash. DeepSeek announced on 2026-09-10 that `deepseek-v4-pro` would also route to V4.1 Flash from 04:00 UTC on 2026-09-14 — then **reversed that decision**; the change log now states V4 Pro API service continues with billing unchanged. **V4.1 Pro has not launched** (verified against DeepSeek's change log, news page, pricing page, and Hugging Face org on 2026-10-04; `deepseek/deepseek-v4.1-pro` returns HTTP 404). Operational note: move off the legacy Flash aliases, since the compatibility routing is explicitly temporary.
- **Context window:** **1,000,000 tokens**, up to **384,000 max output** (DeepSeek API Models & Pricing). Artificial Analysis independently lists 1M (~1500 A4 pages). Recommended config: `temperature` 1.0, `top_p` 0.95–1.0, `context_window` 1M, `max_tokens` ≥ 256K.
- **Modalities:** **Text and image input; text output** (Artificial Analysis confirms). Thinking and non-thinking modes; JSON output, tool calls, Responses API (adapted for Codex), and Anthropic API supported. Audio and video are not supported.
- **Pricing (verified 2026-10-10, unchanged):** Off-peak **$0.003** cache-hit input / **$0.15** cache-miss input / **$0.60** output per 1M. Peak hours double everything to $0.006 / $0.30 / $1.20; peak is 01:00–04:00 and 06:00–10:00 UTC on weekdays, excluding Chinese public holidays. Versus V4-Flash this is a 60% cut on cached input (~33%) and uncached input (~11%) on output in CNY terms. Artificial Analysis quotes the blended **peak** rate, a **98% cache discount**, and **$0.27 per Intelligence Index task**.
- **Architecture:** Open-weight MoE, **552B backbone parameters**; **8B activated during prefill, 16B during decode** — the Causal Encoder-Decoder (CED) design that lets a Flash SKU post Pro-or-better agent scores. 40 layers (20 encoder + 20 decoder) so the decoder's global KV cache is projected from the encoder rather than stored per decoder layer. Combines cross-layer KV-cache reuse in **Compressed Sparse Attention 2 (CSA2)** with **FP4 KV caching**: global KV cache footprint **890 bytes/token** (~1/4 of V4-Flash, ~437× smaller than DeepSeek-V1) and persistent KV cache ~1/8 of V4-Flash via **SWA Bounded Replay**. Extending context 4K → 1M raises decode compute by only ~25%.

### Raw benchmarks found

**Official — DeepSeek-V4.1-Flash model card instruct table (all at maximum reasoning effort, `temperature=1.0`, `top_p=0.95`; code-agent benches use DeepSeek Harness Minimal at 1M context, DeepSWE additionally via the official mini-SWE harness, visual-agent benches via Claude Code at 512K, Agents' Last Exam and AutomationBench on official scaffolds):**

Reasoning:

- GPQA Diamond (Pass@1): **90.9%**
- Humanity's Last Exam (Pass@1): **36.8%** full set; **39.1%** text-only subset
- Codeforces rating: **3471** — highest in DeepSeek's own comparison table (V4-Pro 3348, V4-Flash 3289)
- MathArena Apex (Pass@1): **65.6%**

Agentic / tool use:

- Terminal-Bench 2.1 (Pass@1): **90.6%** — best in DeepSeek's table (Opus 5 89.1, GPT-5.6 Sol 88.8, K3 88.3)
- Terminal-Bench 3.0 (Pass@1): **30.0%**
- Terminal-Bench 4.0 (Pass@1): **31.2%** — vs. Opus 5 51.8, GPT-5.6 Sol 39.9
- AutomationBench (Pass@1): **54.8%** — leads Opus 5 (50.3) and GPT-5.6 Sol (45.8)
- Agent's Last Exam (Pass@1): **31.8%** — leads Opus 5 (28.6), GPT-5.6 Sol (26.7)
- HLE with tools (Pass@1): **63.9%** — edges Opus 5 (63.6)
- CyberGym: **88.1%**; SEC-Bench Pro: **62.8%**; ExploitGym: **15.3%**

Coding:

- DeepSWE v1.1 (Resolved): **74.2%** — ties Opus 5 (74.0), beats GPT-5.6 Sol (73.0)
- NL2Repo-Bench (Score): **64.0%** — vs. Opus 5 75.3
- ProgramBench (Almost@1): **20.3%** — vs. Opus 5 37.0, GPT-5.6 Sol 23.0

Visual agent (native multimodal, Claude Code harness, 512K context, with tools):

- BabyVision w/ tools (Pass@1): **89.6%** — vs. Opus 5 94.1, GPT-5.6 Sol 88.9
- Chartography w/ tools (Pass@1): **78.9%** — vs. Opus 5 84.0, GPT-5.6 Sol 79.9
- ZeroBench-main w/ tools (Pass@5): **49.0%** — vs. Opus 5 52.0, GPT-5.6 Sol 53.0

**Official — base (pre-instruct) knowledge, DeepSeek-V4.1-Flash-Base, few-shot:**

- MMLU-Pro (5-shot, EM) **74.1%**; AGIEval (3–5-shot) 83.4%; C-Eval (5-shot) 92.1%; SuperGPQA (5-shot) 53.1%; MultiLoKo 45.5%; SimpleQA-Verified (25-shot) 42.3%

**Official — harness variance (this is the most important table in the card):**

| Scaffold | DeepSWE v1.1 | Terminal-Bench 2.1 |
| --- | --- | --- |
| Claude Code | 69.8 | 88.0 |
| Codex | 65.6 | 84.1 |
| OpenCode | 65.5 | 85.0 |
| Pi | 66.2 | 86.1 |
| mini-SWE | **74.2** | 90.3 |
| DSH Minimal | 72.6 | **90.6** |
| DSH Standard | 70.5 | 85.8 |
| DSH PTC | 67.6 | 85.8 |

Reasoning-effort scaling on the same checkpoint: moving `reasoning_effort` from 25 to 100 lifts the average across eight reasoning benchmarks from **67.1% → 76.3%**, DeepSWE from **66.0% → 74.2%**, and Terminal-Bench 2.1 from **82.4% → 90.6%** — at roughly **2.5× the output tokens**. Every published figure above is at max effort; lower settings score lower.

**Independent:**

- **Vals AI Terminal-Bench 2.1: 74.53%** (temp 1, default top-p, high reasoning effort) — ranks **#2 among open-weight models**, but is **16 points below DeepSeek's own 90.6%**. The clearest evidence in this dataset that vendor Terminal-Bench numbers are scaffold-dependent.
- Artificial Analysis Intelligence Index v4.3.2: **39/100 at max effort**, rank **#7/117** open-weights of similar size (unchanged from 39 / #7/116; the 40 in DeepSeek's launch post was the older composite). The **non-reasoning variant scores 25**.
- AA speed/cost: **217.1 output tokens/s** (rank **#5/117**, vs. a 69.5 t/s open-weight median), **TTFT ~1.05–1.16s**, **$0.27 per Intelligence Index task**, **98% cache discount**, **250M** index output tokens against a 140M median — AA's own summary calls it "notably fast, however very verbose."
- **Provider variance is extreme** (22 providers): LithosAI ULTRA CHAT reaches **1,182.5 t/s** at $0.16/task; DeepInfra runs **70.1 t/s** at $0.44/task; Together AI 280 t/s at $0.32; Baseten 288 t/s at $1.21. Same weights, 17× speed spread.
- Context reference: **DeepSeek V4 Pro 0813 (Max)** scores **36** on the same AA Index — so V4.1 Flash is the higher-scoring DeepSeek model despite being a quarter of the price.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench, Tau3-Banking, GDPval-AA, Claw-Eval, MCP-Atlas, CritPt, AA-Omniscience, and independent long-context retrieval: **no verified public score found.**

Sources consulted: [DeepSeek-V4.1-Flash Hugging Face model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash), [DeepSeek-V4.1-Flash technical report (arXiv 2609.19969)](https://arxiv.org/html/2609.19969v1), [Introducing DeepSeek-V4.1-Flash (DeepSeek, 2026-09-10)](https://www.deepseek.com/en/news/deepseek-v4-1-flash/), [DeepSeek API Change Log](https://api-docs.deepseek.com/updates), [DeepSeek API Models & Pricing](https://api-docs.deepseek.com/quick_start/pricing), [Artificial Analysis DeepSeek V4.1 Flash](https://artificialanalysis.ai/models/deepseek-v4-1-flash) and [provider benchmarking](https://artificialanalysis.ai/models/deepseek-v4-1-flash/providers), [SandBase — V4.1 Pro release status (2026-10-04)](https://blog.sandbase.ai/deepseek-v4-1-pro-release-status-2026/), [AI Stack Current — API lifecycle reversal](https://aistackcurrent.com/news/deepseek-v4-1-flash-launch-api-migration/), and [The AI Rankings](https://theairankings.com/deepseek/deepseek-v4-1-flash/), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 96/100.** Raised from 95. DeepSeek's table has it leading a wide agent field at max effort: Terminal-Bench 2.1 **90.6%**, AutomationBench **54.8%** (above Opus 5 and GPT-5.6 Sol), Agents' Last Exam **31.8%** (above both), HLE with tools **63.9%** (marginally above Opus 5), CyberGym **88.1%**, NL2Repo **64.0%**. Held at 96 rather than higher by **Vals AI's independent Terminal-Bench 2.1 of 74.53%** — a 16-point gap that demonstrates the headline number is scaffold-specific (DeepSeek's own card shows an 84.1–90.6 range across eight scaffolds for the same checkpoint) — and by ProgramBench **20.3%** and Terminal-Bench 4.0 **31.2%**. DeepSeek's own paper concedes "a gap with giant models remains on science-oriented agentic tasks."
- **Reasoning: 88/100.** Reduced from 91. GPQA Diamond **90.9%**, Codeforces **3471** (best in DeepSeek's table), and MathArena Apex **65.6%** are strong, and base-model MMLU-Pro is 74.1%. The reduction is driven by newly documented **HLE at 36.8% full-set / 39.1% text-only** — against Opus 5's **56.3%**, a ~20-point gap that the prior pass had no visibility into. Also documented for the first time: the **reasoning-effort dial matters enormously** (67.1% → 76.3% average from effort 25 → 100), so the published figures are best-case and cost ~2.5× the output tokens.
- **Context window: 97/100.** Slightly reduced from 98. 1M in / 384K out is officially verified, and the CED + CSA2 + FP4-KV design is a genuine engineering answer to long-context cost rather than a paper claim. Held just below the ceiling because **no independent retrieval-at-length measurement exists** for this exact model, and Novita serves it at 524K rather than 1M.
- **Multimodal: 85/100.** Raised from 65 — the largest correction in this report. The prior pass capped at 65 because only "text/image input, text output" was verified. DeepSeek now publishes a **visual-agent suite**: BabyVision w/ tools **89.6%** (above GPT-5.6 Sol's 88.9), Chartography w/ tools **78.9%**, ZeroBench-main w/ tools **49.0%**, and image understanding is native to the base architecture rather than a separate experimental variant. Deducted because ZeroBench is the weakest of the three rows, and text-only output with no audio or video keeps it clear of the top multimodal tier.
- **Coding: 92/100.** Reduced from 93. DeepSWE v1.1 **74.2%** (essentially tied with Opus 5 and ahead of GPT-5.6 Sol), Terminal-Bench 2.1 **90.6%**, NL2Repo **64.0%**, Codeforces **3471**, and MathArena Apex **65.6%** all support frontier-tier coding. Deducted for ProgramBench **20.3%** (Opus 5 scores 37.0), Terminal-Bench 4.0 **31.2%** vs. Opus 5's 51.8, and the fact that DeepSWE moves between **65.5 and 74.2 depending on scaffold** — the vendor's best cell is the mini-SWE harness, the one explicitly chosen "to align with official setup requirements."
- **Cost efficiency: 97/100.** Reduced from 98. Off-peak **$0.15 / $0.60** with a **$0.003** cache hit and a **98% cache discount** at **$0.27 per Intelligence Index task** is still exceptional — it scores the same AA Index as GPT-5.5 (39) for roughly one tenth of GPT-5.5's $2.63/task, and beats DeepSeek's own V4 Pro (36) at a quarter the price. Three deductions: **peak hours double the rate** during weekday UTC windows, **250M index output tokens against a 140M median** inflates realized spend on long agentic runs, and **22 providers vary by 17× in throughput and 8× in cost per task** — the DeepSeek first-party route ($0.27/task, 217 t/s) is the cheap-and-fast end, not the norm.
- **Overall Score: 91.6/100.** (96 + 88 + 97 + 85 + 92) / 5 = 458 / 5 = 91.6, up from 88.4. The movement is driven almost entirely by **Multimodal 65 → 85** on newly published vision-agent benchmarks. **Best fit:** high-volume multimodal coding and automation agents over very long contexts where cache hits dominate spend — the CED architecture is the strongest long-context cost story in the dataset. **Two practical warnings:** every headline benchmark is at max reasoning effort and costs ~2.5× the tokens, and Vals AI's independent Terminal-Bench 2.1 of 74.53% is a better guide to third-party scaffolds than DeepSeek's 90.6%.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of DeepSeek's official model card, technical report (arXiv 2609.19969), launch post, API change log and pricing page, plus Artificial Analysis (model page and 22-provider benchmarking), Vals AI, SandBase, and secondary trackers; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note: the AA Index is recorded as **39** (v4.3.2) rather than the **40** in DeepSeek's launch post — the composite was rebuilt between the two. The 90.6 vs. 74.53 Terminal-Bench 2.1 gap is retained as a flagged vendor-vs-independent conflict, alongside DeepSeek's own scaffold table showing the same checkpoint ranging 84.1–90.6.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_1_Flash_Recheck.md`, using the same headings.