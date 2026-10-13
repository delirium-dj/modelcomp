# Kimi K2.6 — findings by Space Bunny

- Source: Moonshot AI / `kimi-k2.6`
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's GA release of its open-weight, natively
  multimodal agentic MoE, built for long-horizon coding, coding-driven design and
  swarm-based orchestration (up to 300 sub-agents / 4,000 coordinated steps).
  General-purpose sibling of the later `kimi-k2.7-code` and `kimi-k3`; K3 is
  Moonshot's flagship as of the 2026-07 model list.
- **Provider / access:** Moonshot AI platform (`https://api.moonshot.ai/v1`,
  Chat Completions, Anthropic-compatible endpoint offered); also OpenCode Zen
  (`opencode/kimi-k2.6`), OpenRouter (`moonshotai/kimi-k2.6`), Vercel AI Gateway,
  Azure/Fireworks/DeepInfra/Nebius and self-host via vLLM/SGLang/KTransformers
  (transformers >= 4.57.1).
- **Release / knowledge:** Released 2026-04-20 (GA 2026-04-21, after an 8-day
  preview); official knowledge cutoff not published. **Status re-checked
  2026-10-13: still live and still sold.** Moonshot's live pricing page carries it
  as one of only three billable models (K3, K2.7 Code, K2.6) after `kimi-k2.5` and
  the whole `moonshot-v1` series were retired in August 2026 and the `kimi-k2`
  series in May 2026.
- **IDs:** `kimi-k2.6` (Moonshot API), `moonshotai/Kimi-K2.6` (Hugging Face),
  `moonshotai/kimi-k2.6` (OpenRouter), `opencode/kimi-k2.6` (Zen). No free Zen
  ID found — cost scored on paid pricing.
- **Context window:** **262,144 tokens (262K), re-confirmed first-party on
  2026-10-13** from Moonshot's own live pricing table, which states it explicitly
  for `kimi-k2.6` (alongside K2.7 Code at the same 262,144 and K3 at 1,048,576).
  Secondary aggregators still quote "128K" (kimi-k2.org landing copy) and Gert Labs
  reports "256,000" — both are off; the vendor table wins. Max output reported as
  262K on cloudprice and 235,929 on Kilo Code (route-specific caps).
  **The 2026-09-30 report stated "no independent long-context retrieval
  measurement found" for this model. That statement is now withdrawn — see Long
  context below.**
- **Modalities:** text, image, video, PDF in; text out; reasoning (thinking and
  non-thinking modes); tool calls (ToolCalls, JSON mode, partial mode,
  automatic context caching); web search tool.
- **Pricing (as of 2026-10-13):** **First-party figure re-verified today from
  Moonshot's pricing page: $0.95 per 1M cache-miss input / $0.16 cache hit /
  $4.00 output** (¥6.50/¥27.00 CNY). OpenCode Zen mirrors exactly $0.95 / $4.00 /
  $0.16. No permanent free production tier (per Kimi's own pricing FAQ).
  > **Conflict recorded and adjudicated:** BenchmarkList's header lists K2.6 at
  > **-$0.55 in / $3.20 out**. That matches **no Moonshot SKU** — the live K-series
  > table is $0.95/$4.00 for both K2.6 and K2.7 Code and $0.60/$3.00 for the
  > (now-retired) K2.5 — and Moonshot publishes no such rate. It is a discounted
  > gateway route, so **the vendor figure is used** and BenchmarkList's is recorded
  > but not applied. OpenRouter's cheapest route was $0.73/$3.49 in September.
- **Architecture:** proprietary-vendor MoE, open weights under a **Modified MIT
  License** (commercial use permitted): 1.06T total parameters, 32B activated
  per token, 384 experts (8 routed + 1 shared), 61 layers, 7,168 attention
  hidden dim, 64 heads, MLA attention, 160K vocab. Native multimodal via a
  400M-parameter MoonViT vision encoder fused into the model.
  **New caveat (2026-10):** Artificial Analysis's **Openness Index scores it 33.33
  points (151st of 204)** — with **Pre-training Data Access 0, Pre-training Data
  License 0, Post-training Data Access 0, Post-training Data License 0**, and
  Model Transparency and Methodology Transparency at 2 each. The weights are open;
  the data is not, and nothing in the openness record describes how it was made.

### Raw benchmarks found

> **Read this section's provenance first — it changed the most.** The 2026-09-30 pass
> assembled a vendor-card list plus a handful of mirrors. The 2026-10-13 pass found a
> consolidated independent catalogue carrying **200 score rows for this exact model,
> split 104 first-party / 11 verified / 85 other sources**, each with a rank,
> percentile, field leader and date. That is enough to do three things the old
> report could not: place almost every number in its field, **resolve two conflicts
> the old report had to leave open**, and **falsify one of its own figures**.
> Roughly half of the rows are new to this model entirely.

Agent / tool use:

- Terminal-Bench 2.1: **three values now on record — 67.2%** (vendor card, 1st of
  10 on its own board, 24.2 pp behind Fable 5.1's 91.4), **71.3%** (vendor "best
  reported harness", 20th of 27, 27th pct, 18.2 pp behind G-5.6 Sol at 89.5), and
  **65.9% inside Artificial Analysis's verified Intelligence Index**. **This
  falsifies the old report's headline 53.56%**, which came from a July BenchLM
  snapshot and is supported by nothing else; the other way round, three sources now
  cluster at 66–71%.
- Terminal-Bench 2.0: **66.7%** (11th of 68, **85th pct**)
- Terminal-Bench Hard: **43.9%** (20th of 32, **94th pct**)
- TerminalWorld (real-world terminal tasks): **57.5%** pass, 115 solved (2nd of 8, 86th pct)
- **Long-Horizon Terminal-Bench: mean reward 0.26, 0 tasks solved at reward ≥ 0.95,
  mean cost per task $9.94** (19th of 21, **10th pct**) — the same model that tops
  the short terminal benchmarks collapses on the long-horizon variant.
- Toolathlon: **50.0%** (30th of 41, **28th pct**), field leader O-5 at 80.6 (−30.6).
  The old report's framing — "above Opus 4.6's 47.2" — is true inside Moonshot's
  comparison card and misleading in the field.
- MCPMark: **55.9%** (7th of 41, **85th pct**); MCPMark-Verified 72.8% (4-model field)
- MCP Atlas: **69.4%** (4th of 8, 57th pct), field leader Fable 5.1 87.2 (−17.8)
- **Tau2-Bench Telecom 95.9%** (15th of 33, **96th pct**); **TAU3-Bench 72.4%** (3rd of
  13, **83rd pct** — Airline 85.8 / Retail 82.9 / Telecom 97.8 / Banking 23.1)
- **Tau3-Banking 23.3%** (45th of 176, 75th pct), field leader GLM-5.3 50.3 (−27.0)
- Claw-Eval: **61.5%** (4-model field); **ClawProBench final 59.31, pass^3 39.1%,
  pass@3 54.1%** (16th of 48, 68th pct) — the old report's "62.3 pass^3 / 80.9
  pass@3" does not match this ClawProBench row and is more likely a different
  harness generation.
- OSWorld-Verified: **73.1%** (26th of 70, 64th pct), **field leader K3 at 84.8 (−11.7)**
- **OSWorld2.0 (long-horizon computer use): binary accuracy 4.6%, partial 22.1%**
  (23rd of 24, **4th pct**), field leader O-5 75.4 (−70.8) — Verified
- **AutomationBench: task success rate 2.6%** (44th of 48, **9th pct**), field leader
  O-5 50.3 (−47.7) — Verified. Distinct from MiMo's similarly-named internal set.
- **Agents' Last Exam: 9.2% pass rate / 21.7 score** (37th of 41, **10th pct**),
  field leader G-6 Astra 59.3 (−50.1) — Verified
- APEX-Agents-AA: **28.5%** (14th of 33, 59th pct), G-5.6 Sol 56.7 (−28.2)
- BrowseComp: **83.2%** (32nd of 60, 47th pct), G-6 Astra 94.2 (−11)
- DeepSearchQA 92.5 f1 / 83.0 accuracy; WideSearch item-f1 80.8
- **GDPval-AA: Elo 1481** (6th of 11, 50th pct), field leader O-5 1861 (−380).
  The old report recorded "no verified public score found" — one exists.
- **GDPval wins/ties vs human: 50.4%** (9th of 18, 53rd pct)
- PinchBench: **90.2%** (6th of 7, 93rd pct)
- Gert Labs Rankings: **GScore 65.5%**, avg percentile 74.4, median percentile 81.3,
  gameplay success 74.4%, agentic coding G 73.8%, one-shot coding G 46.4%,
  decision making G 66.8%, 451,532 matches, context length 256,000 (5th of 6, 93rd pct)
- AgentWorldBench 53.42 (9th of 16); ITBench-AA 31.2 (16th of 23); Vals Index-style
  cyber and financial agent rows all in the 17th–68th pct range

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: 44.22, rank 35 of 427, 92nd pct**
  (Verified, 2026-07-21) — field leader Fable 5.1 at 65.7 (−21.48). Components:
  GDPval-AA Elo 1189.4, SciCode 53.5%, **AA-LCR 69.7%**, **AA-Omniscience 6.42**,
  HLE 35.9%, **GPQA Diamond 91.1%**, **CritPt 8.0%**, Tau3-Banking 20.6%,
  Terminal-Bench v2.1 65.9%; **Coding Index 61.77, Agentic Index 30.27**;
  cost/task $0.33, time/task 649.74 s.
  > **Conflict resolved.** The old report carried an unresolved
  > "53.9 (#7) vs 45 (#53/597)" disagreement and treated it as a cap on Reasoning.
  > The independent catalogue shows *both* numbers, on separate dated rows: the
  > **current verified index is 44.22 (35/427)**, and the 53.9 survives only as a
  > component line inside a 2026-06-10 Artificial Analysis **Openness Index** row —
  > a stale snapshot of a different measurement vintage. The old figure was
  > quoting the stale row. Reasoning below is re-derived from the verified 44.22.
- **GPQA Diamond: 91.1% (Verified, 29th of 468, 94th pct)**, field leader G-6 Astra
  96.1 (−5.0). A second row gives 89.1% (24th of 117, 80th pct) and the vendor card
  says 90.5% — **the old report used the vendor number; the verified number is
  higher.**
- Humanity's Last Exam: **37.5%** (50th of 478, **90th pct**), O-5.5 67.7 (−30.2) — Verified
- HLE: **35.9%** (AA component). HLE **with tools 54.0%** (13th of 29, **57th pct**),
  field leader **G-5.6 Sol at 64.5 (−10.5)** — so the old report's claim that 54.0
  "leads the vendor's entire frontier comparison" is true against Moonshot's card
  and false in the field.
- **AA-Omniscience: index 35.5, accuracy 35.5%, hallucination rate 32.9%,
  non-hallucination 67.1%** (4th of 9, 63rd pct). The old report recorded "no
  verified public score found" for hallucination rate; there is one.
- **CritPt: 8.0%** (AA component). The old report recorded "no verified public
  score found"; there is one, and it is low.
- **HalluWorld: overall 9.3%** (8th of 14, 46th pct) — causal 47.4% but
  perceptual 5.4%, memory 6.2%, uncertainty 1.9%
- **SimpleQA 38.7%** (14th of 30, 55th pct), G-5.6 Sol 71.6 (−32.9)
- MMLU-Pro **88.1%** (10th of 312, **97th pct**); a separate MMLU Pro row gives
  **87.6%** (19th of 116, 84th pct), field leader O-5 91.6 (−4.0)
- MMLU-Redux 95.3% (1st of 11); MMLU-ProX 85.0% (4th of 13); MML-Redux/SuperGPQA 71.3%
- AIME 2026: **96.4%** (11th of 36, 71st pct), G-5.6 Sol 99.9 (−3.5)
- HMMT February 2026: **92.7%** (7th of 25, 75th pct)
- IMO-AnswerBench: **91.1%, 93.7% with tools** (3-model field) — the old report's
  86.0 is superseded
- PolyMATH 82.7% (1st of 11); MathArena Apex **24.0%** (14th of 49, **field leader
  K3 65.6, −41.6**); ProofBench **16.0%** (31st of 53, 42nd pct, O-5 78.0, **−62.0**);
  **CAM-Bench pass@1 0.3%**; MathConstraint 35.9%
- **Frontier-math and research-reasoning is where this model is weak**, and the old
  report had no visibility of it: MathArena Apex 24.0, ProofBench 16.0,
  **DeepWeb-Bench overall 16.8%** (9th of 9, 0th pct), FutureEval 9.49 (74th pct),
  MLS-Bench Lite 26.7% (15th of 15, **0th pct**, Verified), ORAgentBench 27.1%
- CAIS Text Capabilities Index 32.8 (12th of 41, 73rd pct): HLE 35.48, ARC-AGI-2 18.12,
  TextQuests 27.36
- BenchLM composite: **85 points overall** — Agentic 88.1, Coding 89.1,
  Multimodal Grounded 68.1, Knowledge 75.9 (12th of 106, **90th pct**)
- LiveBench: **72.4% average** (26th of 43, 40th pct) — code_completion 78.3,
  code_generation 78.9, math_comp 96.1, olympiad 90.0, python 80.0
- Instruction following: IFEval **94.5%** (3rd of 39, 95th pct); IFBench **76.0%**
  (16th of 39, 61st pct, Qwen3.8 Flash 81.3)
- Arena AI WebDev Arena **Elo 1509** (36th of 105, 66th pct, O-5 1663);
  Arena AI Document **Elo 1451** (19th of 34, 45th pct)
- EQ-Bench normalized Elo 1561.2 (85th pct); GDPval 50.4%; LegalBench 84.7% (83rd pct)
- **LCR: AA-LCR 69.7% inside the AA index.** The old report's "LCR ~0.7" is
  consistent with this. MLCR: the old report said "no verified public score"; the
  closest published figure is **MLS-Bench Lite 26.7%, rank 15 of 15 (0th pct)**,
  Verified — i.e. a score does exist and it is the worst in its field.

Coding:

- SWE-bench Verified: **two rows, both real.** **80.2%** (vendor card, 17th of 50,
  **67th pct**, field leader O-5 96, −15.8) and **76.2%** (independent/Scale-style
  row, 27th of 72, **63rd pct**, field leader O-5 97.0, −20.8). The Artificial
  Analysis and AIIQ rows both carry the lower **76.2%**, i.e. the *measured* figure
  is the lower one and the vendor figure is the higher one.
- SWE-bench Pro: **58.6%**, **rank 33 of 58 — 44th pct, field leader O-5.5 at 89.9
  (−31.3)**. The old report's claim that it "leads this open-weights set" still
  holds against closed frontier models removed; the field percentile is the number
  that was missing, and it is middling. A separate CAIS row lists SWE-bench Pro
  at 50.1.
- **DeepSWE: Pass@1 24.0%** (16th of 24, **35th pct**), field leader G-5.6 Sol 73.0
  (**−49.0**) — the old report recorded "no verified public score found"; one exists
  and it is low
- **SWE-Marathon: Pass@1 0.0%** (33rd of 33, **0th pct**), field leader O-5 50.0,
  mean cost/trial $5.31, 6.6 M tokens/trial, measured on Kimi Code CLI v1.41.0 —
  a genuine zero across every category (library/repro, product clone, ML
  engineering, algorithmic)
- SWE-bench Multilingual: **65.9%** (42nd of 49, **15th pct**), field leader O-5.5
  93.9 (−28). **This corrects the old report's 76.7%** — the figure on record is
  65.9, and it sits near the bottom of its field.
- LiveCodeBench: **two rows** — **86.8%** (independent implementation, 13th of 123,
  **90th pct**, O-5 89.0, −2.3) and **90.2%** (official leaderboard Pass@1, 9th of 50,
  84th pct, Qwen3.8 Flash 91.9, −1.7). The old report's single 89.6% is replaced by
  this pair.
- SciCode: **53.5%** (Verified, 37th of 296, **88th pct**), field leader O-5.5 66.9
  (−13.4) — the old report's 52.2% is close, and the percentile is new
- FrontierSWE v1: average rank 13.44, dominance 22.2% (13th of 15, 14th pct), GLM-5.3 4.5
- FrontierCode: main 16.0%, Diamond 3.8%, extended 37.0% (31st of 36, 14th pct)
- Code Migration 27.8% (53rd pct); NL2Repo 42.8% (48th pct); SkillsBench 56.2%
- **Vibe Code Bench v1.1: 37.9%** (34th of 75, 55th pct), field leader Fable 5.1
  90.3 (**−52.4**) — confirms the old figure and quantifies the gap
- ProgramBench 48.3% (44th pct, G-6 Astra 85.4, −37.1); cursorBench31 47.6%
- IOI: **585 points, 1st of 58 (100th pct)** — the single best relative placement in
  the whole table
- Cookie-Bench 78.3 (83rd pct); ALE-Bench 80th pct; PerfCodeBench CGRE 62.1% (68th pct);
  Kernel Bench L3 median speedup ×1.41, 80% win rate; BLXBench 15.4% (21st pct);
  CUDABeaver pass@5 18.8% (20th pct); GBA Eval 0.9% (30th pct)

Long context — **the single biggest change in this report:**

- **AA-LCR: 81.0%, rank 33 of 408, 92nd percentile**, field leader K3 at 88.7 (−7.7).
  **This retracts the old report's central caveat.** On 2026-09-30 this file stated
  "No MRCR / RULER / GraphWalks retrieval measurement published for K2.6" and used
  that absence to hold Context window at 72. There is a measured long-context
  retrieval result and it places the model in the top decile of a 408-model field.
- **MRCR-v2 at 128k: 63.1%** (15th of 20, 26th pct)
- **ATLAS: score 50.47** (12th of 23, 50th pct) — foundational 43.31, application
  47.14, holistic 66.03, spanning a **range of 8K–1M**
- **Context Arena: AUC 128K 46.4%, AUC 1M 8.0%** (6th of 51); with thinking enabled,
  **AUC 128K 53.8%, AUC 1M 8.8%**, average score 64.6% (10th of 35)
  > **Conflict worth recording:** retrieval is excellent at 128K (AA-LCR 92nd pct)
  > and **near-total collapse at the long end** (AUC 1M of 8.0–8.8%). Both are real
  > measurements. The honest reading is that the 262K window is *usable* but the
  > model degrades sharply well before reaching it — which is exactly the distinction
  > the old report could not make when it had no numbers at all.

Vision (for the multimodal dimension):

- **MMMU Pro: 86.3%** (17th of 79, **79th pct**), field leader O-5 89.9 (−3.6).
  The old report's 79.4/80.1 were vendor-card figures; the independent measurement
  is 3.7–5.9 points *higher*.
- MathVision **93.2%** (6th of 170, **97th pct**), G-5.6 Sol 95.8 (−2.6)
- **BabyVision 68.5%** (13th of 38, 68th pct, O-5 94.1, −25.6) — Verified
- **Vals Multimodal Index 56.4** (17th of 29, 43rd pct, O-5 73.9, −17.5)
- Design Arena **Elo 1315, win rate 57.7% over 13,665 battles** (39th of 343, 89th pct), K3 1445
- CC-OCR V2 **65.3%** (6th of 15, 64th pct) — recognition 84.7, parsing 67.6,
  **grounding 19.0**, extraction 66.7, QA 88.5
- Vendor card (retained, not superseded): CharXiv RQ 80.4 / 86.7 with python,
  V* with python 96.9, MMMU-Pro 79.4 / 80.1 with python
- **Document and chart understanding is the weak flank: Chartography 12.2%**
  (36th of 39, **8th pct**, Verified), **Blueprint-Bench 2 normalized 0.557**
  (26th of 31, 17th pct), CADBench IoU 22.4% (30th pct), FraudBench image-TPR
  0.03 (18th of 20, 11th pct)

### Normalized scores (1–100)

- **Tool use: 85/100.** *Revised down from 88 — and the reason is the clearest new
  finding in this pass.* The old score leaned on TB2.1 53.56%, and that figure was
  wrong: three sources now give 65.9 / 67.2 / 71.3, which is a real upgrade in the
  evidence. On classic terminal and tool-call work this model is genuinely elite —
  Terminal-Bench 2.0 at the 85th percentile, Terminal-Bench Hard at the 94th,
  MCPMark at the 85th, PinchBench at the 93rd, τ²-Bench Telecom at the 96th, τ³-Bench
  at the 83rd, IOI first of 58. But the long-horizon agentic tier, which the old
  report could not see at all, is close to the floor: **AutomationBench 2.6% (9th
  pct), OSWorld2.0 binary 4.6% (4th pct), Agents' Last Exam 9.2% (10th pct),
  Long-Horizon Terminal-Bench mean reward 0.26 with zero tasks solved (10th pct)**,
  and Artificial Analysis's own **Agentic Index of 30.27**. Toolathlon is only 28th
  percentile and MCP Atlas 57th. The coherent reading is short-horizon excellence
  with long-horizon collapse, and 85 prices that accurately rather than the 88 the
  old score implied.
- **Reasoning: 90/100.** *Revised down from 92, on a mix of one upgrade and two
  downgrades.* The upgrade: **GPQA Diamond is verified at 91.1%, 94th percentile of
  468**, higher than the vendor figure the old report used. The downgrades: the
  Artificial Analysis conflict is now **resolved against the optimistic reading**
  (verified index **44.22**, 35th of 427 — the old report's 53.9 came from a stale
  June snapshot of a different measurement), and the frontier-math/reasoning failures
  the old report never saw are severe — **MathArena Apex 24.0% against K3's 65.6,
  ProofBench 16.0% against O-5's 78.0, DeepWeb-Bench 16.8% and last of nine,
  CAM-Bench pass@1 0.3%, MLS-Bench Lite last of 15**, plus HalluWorld 9.3% and
  CritPt 8.0%. MMLU-Pro 88.1% at the 97th percentile, HLE 37.5% at the 90th and
  AIME 96.4% keep it comfortably in the upper band; the research-reasoning ceiling
  is what holds it at 90.
- **Context window: 84/100.** *Revised up from 72 — the largest single move in this
  report, and it is an evidence retraction rather than a judgement call.* The
  2026-09-30 file held this dimension down on one argument: "No MRCR / RULER /
  GraphWalks retrieval measurement published for K2.6." That argument is no longer
  true. **AA-LCR is 81.0% at the 92nd percentile of 408 models**, with MRCR-v2 at
  128K (63.1%) and ATLAS across an 8K–1M range (50.47) alongside it, and the 262,144
  window itself is re-confirmed first-party today. That puts it at the top of the
  200K–500K band. It stops short of the ≥1M band and of 100 for two reasons: the
  window is a quarter of K3's, and **Context Arena measures AUC at 1M of 8.0–8.8%**
  — the model degrades sharply long before it reaches its own ceiling.
- **Multimodal: 82/100.** Unchanged, and now much better evidenced in both
  directions. Native MoonViT vision encoder fused into the backbone (not bolted on),
  verified text/image/video/PDF in and text out, and the independent numbers are
  *stronger* than the vendor card suggested — **MMMU Pro 86.3% at the 79th
  percentile, MathVision 93.2% at the 97th, Design Arena Elo 1315 at the 89th over
  13,665 battles.** It stays at 82 rather than higher because of two measured gaps
  that offset that strength: there is **no audio input and no non-text output**, and
  document/chart reasoning is weak — **Chartography 12.2% (8th pct, Verified),
  Blueprint-Bench 2 at the 17th percentile, CC-OCR grounding at 19.0%, Vals
  Multimodal Index only 43rd percentile at 56.4.**
- **Coding: 86/100.** *Revised down from 90 — the biggest quality reduction in this
  pass.* The headline open-weights result is real and still holds: **SWE-bench Pro
  58.6%** does lead the open-weight field, and LiveCodeBench is 90th percentile
  (86.8%) / 84th (90.2%), SciCode 53.5% at the **88th percentile**, SWE-bench
  Verified 67th, Terminal-Bench 2.0 85th, IOI first of 58. But the field context the
  old report lacked is punishing, and two of its numbers were wrong. **SWE-bench Pro
  is only 44th percentile against a field leader at 89.9** — a 31-point gap that
  "open-weights SOTA" concealed. **SWE-bench Multilingual is 65.9%, 15th percentile —
  the old report's 76.7% was simply incorrect.** **DeepSWE is 24.0%** (the old report
  said no score existed), **35th percentile, 49 points behind the leader**, and
  **SWE-Marathon is a verified 0.0%, last of 33**, on 6.6 M tokens and $5.31 per
  trial. Vibe Code Bench stays at 37.9% against Fable 5.1's 90.3. The pattern is
  consistent with the Tool use finding: strong on bounded repository repair, absent
  on long-horizon software engineering.
- **Cost efficiency: 88/100.** Unchanged. First-party pricing re-verified today at
  **$0.95 cache-miss / $0.16 cache-hit / $4.00 output**, with Zen mirroring exactly.
  The unusually cheap $0.16 cache-read rate is what real agent loops hit constantly,
  and the independent cost data supports it: Artificial Analysis puts **cost per task
  at $0.33** and time per task at 649.74 s, EnterpriseClawBench reports **¥0.71 per
  completed task**, and ClawProBench ran 56.4 M tokens for **$35.19**. BenchmarkList's
  $0.55/$3.20 header figure is recorded above and not used. No free tier exists, so
  it cannot reach 100, but at this price point and quality it is materially cheaper
  than the $1.25/$4.25 ≈88 anchor.
- **Overall Score: 85/100.** (85 + 90 + 84 + 82 + 86) / 5 = 85.4 → **85**, *up from
  84.8.* The headline barely moves and that is misleading — four of five dimensions
  changed, and they moved in opposite directions. The +12 on Context is the biggest
  single movement in the whole file and it is a **retraction of a September
  caveat**, not new capability; the −4 on Coding and −3 on Tool use are the field
  context finally arriving on benchmarks the September pass could not place. Best
  fit is sharpened accordingly: **an open-weights agentic coding workhorse that is
  elite on bounded, single-harness work and demonstrably weak on long-horizon
  engineering** — pick it for SWE-bench-Pro-grade repository repair, 262K retrieval
  at the 92nd percentile, and $0.16 cached reads on your own hardware; **do not**
  pick it for SWE-Marathon-class multi-hour work (verified 0.0%), for computer use
  (OSWorld2.0 binary 4.6%), or for frontier math (MathArena Apex 24.0%). Step up to
  `kimi-k3` for 1M context, K2.8 Preview for the newer coding line, and a closed
  frontier model for Terminal-Bench-2.1-plus work.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: revised second pass over the 2026-09-30 report. First-party re-verification
  today from **Moonshot's live pricing page** (price $0.95/$0.16/$4.00 and context
  262,144 both confirmed directly) and **Moonshot's platform changelog / model list**
  (K2.6 still live and still one of three billable models after the K2.5, `moonshot-v1`
  and `kimi-k2` retirements). New independent evidence: a consolidated per-benchmark
  catalogue carrying **200 score rows for this exact model (104 first-party /
  11 verified / 85 other)**, each with rank, percentile, field leader and date —
  the source for essentially every new number above, including the **verified
  Artificial Analysis Intelligence Index 44.22 (35/427)** and its component set,
  **AA-LCR 81.0% (33/408, 92nd pct)**, **GPQA Diamond 91.1% (29/468, Verified)**,
  **Humanity's Last Exam 37.5%**, **OSWorld2.0 binary 4.6%**, **AutomationBench
  2.6%**, **Agents' Last Exam 9.2%**, **SWE-Marathon 0.0%**, **DeepSWE 24.0%**, and
  the **Context Arena 128K vs 1M AUC split**. Also used: Artificial Analysis's
  Openness Index record (33.33; all four data-access and data-license components at
  zero) and the OpenCode Zen pricing mirror. **Four conflicts were adjudicated
  explicitly rather than averaged**: the Terminal-Bench 2.1 values (53.56 falsified
  by three sources at 65.9/67.2/71.3), the Artificial Analysis index (53.9 traced to
  a stale June snapshot; 44.22 verified as current), SWE-bench Multilingual (76.7
  corrected to 65.9), and BenchmarkList's $0.55/$3.20 header price (matches no
  Moonshot SKU; vendor figure used). Scores are normalized 1–100 interpretations,
  not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.6_Independent.md`,
  using the same headings. The two gaps still worth filling are a **DeepSWE and
  SWE-Marathon re-run by a third party** (both currently vendor-run, and both
  terrible) and any **retrieval measurement above 128K** — Context Arena's 8% AUC at
  1M and AA-LCR's 81% at the tested depth disagree about how far this window is
  actually usable, and nothing has yet reconciled them.