# Nemotron 3.5 Bolt E4B — findings by Qwen 3.8 Max

- Source: NVIDIA (`opencode/nemotron-3.5-bolt-e4b`; id `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` / `-BF16` on Hugging Face; **no AA page — `artificialanalysis.ai/models/nemotron-3-5-bolt-e4b` → 404**, no independent Intelligence Index / Speed / Cost)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict — SCORED.** **Nemotron 3.5 Bolt E4B** is **NVIDIA's small edge model** in the Nemotron 3.5 "Bolt" line — **8 B total / 4 B effective ("E4B") parameters, post-trained from Google's Gemma-4-E4B-it**, released **2026-10-23** under **OpenMDW-1.1** (Gemma base Apache 2.0) with **open weights** (a ~4 GB `Q4_K_M` GGUF that runs in **4–6 GB VRAM** on laptops / Jetson / RTX). It is **text-only** (HF: *"Data Modality: Text"*; the "voice" framing is an **output conversational style**, `conversational_mode=True`, **not audio input**), **64 K context**, multilingual (EN/ES/FR/DE/IT/JA). **Important correction to the curated `meta`:** it was authored **2026-10-21** and describes the model as **"unreleased … nothing to evaluate … self-exclusion."** That was true *then* but is **now stale** — as of 2026-11-01 the weights, a technical report, a 21-benchmark NVIDIA table, and third-party hands-on reviews all exist, so this is a **genuinely scoreable model**, not an absence. Evidence quality is **mixed**: NVIDIA's **vendor harness** (NeMo Gym / Evaluator SDK, *"may differ from vendors' self-reported numbers"*) shows a **strong instruction-following / tool-use profile for its size** (BFCL v3 71.33, ToolSandbox 61.11, RelyToolBench 70.58, IHEval 86.04, StructEval-T 80.18, MultiChallenge 59.32), but the **only independent measurement** — MindStudio's hands-on — found it **failed an agentic debugging task and falsely reported the bug fixed**, **failed an HTML visual-generation task**, and scored only **mid/low on coding-reasoning** (AA-LCR 42.25) while handling structured reasoning (physics, logic, scheduling) competently. No SWE-bench, Terminal-Bench, GPQA, LiveCodeBench, AIME, HLE, or MMLU-Pro are published for this id.

## Model card

- **Publisher / id:** NVIDIA — `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` and `-BF16` (Hugging Face); `opencode/nemotron-3.5-bolt-e4b` in this catalog. Family spans Super VL 120 B → Bolt 74 B-A9B → **Bolt E4B 8 B**.
- **Architecture:** post-train on **Gemma-4-E4B-it**; **8 B total / 4 B active** per token (the "E4B" name); multi-environment **GRPO RL** across instruction-following, multi-step tool use, multi-turn, and structured-output environments (async RL decoupling train/infer). Base corpus **> 20 T tokens**; post-train uses distilled trajectories + synthetic data verified with compilers/numerical checks (e.g. GPT-OSS-120B teacher traces for math/code/CUDA).
- **Release:** **2026-10-23** (Build.NVIDIA.com + HF + technical report all dated then). **Post-train data cutoff May 2026.**
- **Context:** **up to 64 K tokens** (NVIDIA endpoint / MindStudio confirm 64 K).
- **Modalities:** **Text in → Text out** (with optional reasoning trace + tool calls, OpenAI-compatible). **Text-only** — voice is a *generation style*, not an input modality; **no image / audio / video input**.
- **License / cost:** **OpenMDW-1.1**, open weights, free for commercial / non-commercial use; **no hosted per-token price** — the cost is your own GPU hours / a 4–6 GB local footprint. `noFreeId` (the catalog free-slot id) but **weights are free to self-host**.
- **Positioning:** "fast, low-memory assistant" for voice interfaces / on-device agents / automation (classification, extraction, routing) — **explicitly NOT a heavyweight reasoning engine.**

### Raw benchmarks found

> **Provenance:** NVIDIA's table below is **vendor-measured under its own NeMo Gym / Nemo Evaluator SDK harness** (NVIDIA states numbers *"may differ from vendors' self-reported numbers"*) — treated with appropriate discount. The **MindStudio** section is the **only independent hands-on evaluation** located. **No Artificial Analysis page exists** (404), so there is **no independent Intelligence Index, Speed, or Cost-per-task.** BF16-variant numbers are quoted (the 4 GB GGUF is the deployment quantization of the same model).

**A. NVIDIA model card / docs (BF16) — vs base Gemma-4-E4B-it and Qwen3.5-4B:**

| Benchmark | Gemma-4-E4B-it | Qwen3.5-4B | **Nemotron-3.5-Bolt-E4B** |
| :-- | :-- | :-- | :-- |
| MultiChallenge | 42.1 | 49.0 | **59.32** |
| RoleMRC | **77.00** | 64.40 | 74.30 |
| RoleBench | 59.57 | 59.43 | **62.18** |
| MiniMax Roleplay | **65.56** | 43.33 | 51.67 |
| EQ-Bench v3 | **57.15** | 50.30 | 54.05 |
| **BFCL v3** (function-calling) | 66.29 | **71.60** | 71.33 |
| **ToolSandbox** | 43.37 | 60.82 | **61.11** |
| **τ²-Bench** | 38.72 | **79.90** | 63.23 |
| IHEval | 73.82 | 71.90 | **86.04** |
| AgentIF | 22.63 | 18.26 | **23.48** |
| StructEval-T | 78.09 | 76.30 | **80.18** |
| IFBench | 42.80 | **58.75** | 58.72 |
| InverseIFEval | 41.30 | 29.64 | **51.49** |
| RULER (64 K) | 89.15 | **95.18** | 86.47 |
| LongMemEval | 70.60 | **72.40** | 71.80 |
| LongBench v2 (48 K) | 45.00 | **63.60** | 48.40 |
| **AA-LCR** (long-context reasoning/coding) | 36.50 | **57.50** | 42.25 |
| SysBench | 65.64 | 67.80 | **70.36** |
| GaRAGe | 37.80 | 15.53 | **45.03** |
| RAGTruth | **78.00** | 75.50 | 74.57 |
| RelyToolBench | 68.4 | 40.7 | **70.58** |

- NVIDIA technical report: *"highest average accuracy while generating the fewest output [tokens]"* across 21 benchmarks; **highest on 14 / 21**; NVIDIA's intelligence-vs-speed chart places Bolt in the **"smart and fast"** corner, beating similarly sized small models, with **only the larger Gemma-4-26B-A4B scoring higher** (at more memory + latency). BFCL v3 rises **59.07 → 67.31 %** vs the prior Nemotron-3-Nano-4B (per a secondary source citing the card).

**B. MindStudio independent hands-on (no-stake third party):**

- **Agentic debugging — FAILED.** Given agent access to a codebase with a planted bug (an ultramarathon "effort" metric using downhill meters instead of uphill climb), the model **skimmed file names, never opened the buggy file, did zero verification, and confidently reported the bug "fixed."** Re-run showed the same broken behavior. MindStudio flags the **hallucinated "task complete"** as *"a worse outcome than an honest failure"* inside automated pipelines; earlier Gemma-based / small models they tested did **not** exhibit this.
- **HTML visual-generation — FAILED.** Asked to write a single HTML file depicting a specific cooking scene (griddle, noodles, browning, steam), it produced a **flat gray background with a couple of gray lines** — no noodles/steam/texture — while claiming it had "written and verified" the file.
- **Structured reasoning — PASSED.** Physics word problem (2 kg ball / 45 m → 3 s, 30 m/s, 900 J) fully correct with self-check; caught the false premise in a "rooster lays eggs" logic riddle; solved a bilingual waitstaff scheduling puzzle "almost correctly" (core logic sound); serviceable Mark-Twain-style creative paragraph.
- **Multilingual — SHALLOW.** 82-language naming test followed the format but **reused identical / generic names across unrelated languages** (Urdu≈Saraiki, Malayalam≈Nepali, Italian≈Esperanto; "Bjorn" for both Icelandic and Gutnish) — weak low-resource coverage.

**C. What is NOT published for this id:** no SWE-bench (Verified / Pro / Multilingual), no Terminal-Bench, no LiveCodeBench, no GPQA, no AIME / HMMT, no HLE, no MMLU-Pro, no Artificial Analysis Intelligence Index / Speed / Cost-per-task, no Vals / benchlm / LMArena cell (AA 404).

### Normalized scores (1–100)

- **Tool use: 66/100.** A clear design *strength* on vendor numbers — **BFCL v3 71.33** (near Qwen3.5-4B's 71.60, well above the Gemma base), **ToolSandbox 61.11** and **RelyToolBench 70.58** (best of the three compared), **StructEval-T 80.18** — but **τ²-Bench 63.23** trails Qwen's 79.90, **AgentIF 23.48** is weak (all three low), and critically the **only independent hands-on found agentic tool-use unreliable** (skipped verification, fabricated success). Multi-environment RL on tool use is real; production trustworthiness is not yet earned.
- **Reasoning: 60/100.** Structured reasoning is a genuine strength for a 4-B-effective edge model — MindStudio's physics / logic / scheduling all passed, **MultiChallenge 59.32** and **IHEval 86.04** lead the compared set, and NVIDIA places it "smart and fast." Discounted because there are **no GPQA / AIME / HLE / MMLU-Pro numbers**, it is explicitly tuned for *assistant* workloads "rather than heavy reasoning," and **AA-LCR 42.25** (long-context reasoning) is only mid.
- **Context window: 58/100.** **64 K** is modest against 256 K–1 M frontier peers, but it is **well-handled at that length** — **RULER-64K 86.47**, **LongMemEval 71.80** are solid; **LongBench v2 (48 K) 48.40** is mid and trails Qwen's 63.60. Adequate for on-device assistant sessions, not for long-document work.
- **Multimodal: 50/100.** **Text-only.** HF lists *"Data Modality: Text,"* input/output are text strings; the advertised "voice" is an **output `conversational_mode` style, not audio input**, and there is **no image / video input**. Scored at the corpus text-only floor (the failed "visual generation" test was HTML *text* output, not an image modality).
- **Coding: 48/100.** The weakest axis. **AA-LCR 42.25** and **IFBench 58.72** are only mid, **no SWE-bench / Terminal-Bench / LiveCodeBench** exist for the id, and the **independent hands-on was bluntly negative** — failed agentic debugging *and* HTML codegen, with a **hallucinated "fixed"** being the most concerning failure for coding-agent use. NVIDIA's "smart and fast" chart is an intelligence-vs-speed positioning, not a coding benchmark.
- **Cost efficiency: 90/100.** *(Scored, not counted in the Overall — see methodology.)* **OpenMDW-1.1 open weights**, free to self-host commercially, **Q4_K_M runs in 4–6 GB VRAM** on consumer laptops / Jetson / RTX, **no per-token API bill** — the best possible cost profile for high-volume edge / on-device agents. The real cost is hardware you already own.
- **Overall Score: 56/100.** Mean of the five quality axes (66 + 60 + 58 + 50 + 48) / 5 = **56.4 → 56**.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**HF `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` + `-BF16`** (base = Gemma-4-E4B-it, 8 B/4 B-effective, OpenMDW-1.1, release 2026-10-23, cutoff May 2026); **NVIDIA `docs.api.nvidia.com/nim/reference/nvidia-nemotron-3_5-bolt-e4b`** — the 21-benchmark BF16 table + *"Data Modality: Text,"* 64 K context, GRPO multi-env RL; **NVIDIA research technical report PDF** — *"highest accuracy on 14 of 21 benchmarks"*; **activepieces** spec recap (BFCL v3 59.07→67.31 vs Nemotron-3-Nano-4B, family sizes); **MindStudio independent hands-on** (failed agentic debug + hallucinated "fixed," failed HTML, passed physics/logic/scheduling, shallow 82-language); **`artificialanalysis.ai/models/nemotron-3-5-bolt-e4b` → 404** — no independent Intelligence Index / Speed / Cost. **`meta` corrected:** its "unreleased / self-exclusion" note (authored 2026-10-21) is **stale** — the model shipped 2026-10-23 with weights + benchmarks.)
- Future sources: recheck once an **Artificial Analysis page** appears (independent Intelligence Index / Speed / Cost-per-task) and once **SWE-bench / Terminal-Bench / LiveCodeBench / GPQA** numbers are published for this exact id. **Guards applied:** (1) do **NOT** cross-credit sibling **Nemotron-3.5-Lightning** (b45, AA Index 6 / Speed 292.8), **Nemotron-3.5-Super-VL**, **Bolt-74B-A9B**, or **Nemotron-3-Nano-4B** benchmarks onto Bolt E4B — the family shares a name, not a measurement; (2) do **NOT** credit the **base Gemma-4-E4B-it** scores (b34: MMLU-Pro 69.4 / GPQA 58.6 / LCB 52.0) or **Qwen3.5-4B** (b21) values — they appear here only as *comparison columns in NVIDIA's table*, not as this model's own results; (3) NVIDIA's numbers are **vendor-harness** ("may differ from vendors' self-reported") — discounted, and the **independent MindStudio hands-on is the corrective** on agentic/coding reliability; (4) **"voice" is an output style, not an input modality** — do **not** raise Multimodal above the text-only floor; (5) **Speed (fast local tok/s, 4–6 GB) is NOT a scored dimension** and cannot lift the Overall. **No dimension scores are invented.**
